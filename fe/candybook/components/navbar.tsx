"use client";

import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarBrand, NavbarItem, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { ArrowDown, BxsCategory, IcRoundShop, MingcuteVip2Fill } from "@/components/icons";
import { Avatar, Badge, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip, User } from "@nextui-org/react";
import checkAuthen from "@/app/api/account/checkAuthen";
import { useEffect, useState } from "react";
import logout from "@/app/api/account/logout";
import { usePathname, useRouter } from "next/navigation";
import { showResponseToast } from "@/lib/utils";
import Image from "next/image";

export const Navbar = () => {
  const router = useRouter();
  const [authentication, setAuthentication] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      fetchAuth();
    };

    handleRouteChange();
  }, [pathname]);

  const fetchAuth = async () => {
    const auth = await checkAuthen();
    setIsLoading(false);
    if (JSON.stringify(authentication) !== JSON.stringify(auth)) {
      setAuthentication(auth);
      if (auth == null) {
        localStorage.removeItem("userinfo");
      } else {
        localStorage.setItem("userinfo", JSON.stringify(auth));
      }
    }
  };

  async function logoutHandle() {
    const response = await logout();
    showResponseToast(response);
    router.push("/login");
  }

  return (
    <>
      <div className="hidden lg:flex justify-around w-full bg-purple-400 h-16 px-2 pt-2 py-6 relative
        after:absolute after:h-6 after:[background-size:10px] after:w-full after:bg-[linear-gradient(-45deg,#e9d5ff_0.75rem,_transparent_0),_linear-gradient(45deg,#e9d5ff_0.75rem,_transparent_0)] 
        after:bg-repeat-x after:left-0 after:bottom-0">
        <div>Opening sale up to 25%</div>
        <div>Free Shipping Book with 5-book order</div>
        <div>Opening sale up to 25%</div>
      </div>

      <NextUINavbar
        className="bg-purple-200 px-16"
        maxWidth="full"
        position="sticky">
        <NavbarContent
          className="hidden lg:flex basis-1/5 sm:basis-full gap-8"
          justify="start">
          <NavbarItem>
            <Link
              className="hover:text-purple-400 transition-all text-xl"
              color={pathname == "/categories" ? "secondary" : "foreground"}
              href="/categories">
              Library
            </Link>
          </NavbarItem>
          <NavbarItem className="w-full">
            <Link
              className="hover:text-purple-400 transition-all text-xl"
              color={pathname == "/staticpage" ? "secondary" : "foreground"}
              href="/staticpage">
              About us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent
          className="gap-8 w-full"
          justify="center">
          <NavbarItem>
            <Link href="/" className="text-4xl text-black hover:text-gray-200 transition-all" style={{
              textShadow: "2px 0 #d5a6e1, -2px 0 #d5a6e1, 0 2px #d5a6e1, 0 -2px #d5a6e1, 1px 1px #d5a6e1, -1px -1px #d5a6e1, 1px -1px #d5a6e1, -1px 1px #d5a6e1",
            }}>
              Candy Book
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end">
          {!isLoading && (
            <>
              {authentication && authentication?.role != "admin" && (
                <NavbarItem className="hidden lg:flex">
                  <Tooltip content="Mua gói thành viên">
                    <Button
                      as={Link}
                      href="/subscription"
                      color={pathname == "/subscription" ? "success" : "default"}
                      variant="light"
                      startContent={<IcRoundShop />}
                    />
                  </Tooltip>
                </NavbarItem>
              )}
              <NavbarItem className="hidden lg:flex">
                {authentication ? (
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        className="h-12"
                        variant="light">
                        {authentication.ispremium ? (
                          <Badge
                            className="text-warning"
                            content={<MingcuteVip2Fill />}
                            color="danger"
                            shape="circle"
                            placement="top-right"
                            size="sm">
                            <Avatar
                              isBordered
                              color="default"
                              src={authentication.thumbnail ? authentication.thumbnail : "/image/user.png"}
                            />
                          </Badge>
                        ) : (
                          <Avatar
                            isBordered
                            color="default"
                            src={authentication.thumbnail ? authentication.thumbnail : "/image/user.png"}
                          />
                        )}
                        <div>{authentication.displayname}</div>
                        <ArrowDown />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="My account">
                      <DropdownItem
                        className="text-default-foreground"
                        key="profile"
                        as={Link}
                        href="/profile">
                        Thông tin của tôi
                      </DropdownItem>
                      {authentication?.role == "admin" && (
                        <DropdownItem
                          className="text-default-foreground"
                          key="order-history"
                          as={Link}
                          showDivider
                          href="/admin">
                          Quản lý Moviersals
                        </DropdownItem>
                      )}
                      {authentication?.role == "customer" && (
                        <DropdownItem
                          className="text-default-foreground"
                          key="order-history"
                          as={Link}
                          showDivider
                          href="/order/history">
                          Lịch sử thanh toán
                        </DropdownItem>
                      )}
                      {authentication?.role == "customer" && (
                        <DropdownItem
                          className="text-default-foreground"
                          key="favourite"
                          as={Link}
                          showDivider
                          href="/favourite">
                          Danh sách yêu thích
                        </DropdownItem>
                      )}
                      <DropdownItem
                        key="logout"
                        className="text-danger"
                        color="danger"
                        onClick={logoutHandle}>
                        Đăng xuất
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  <Dropdown backdrop="blur">
                    <DropdownTrigger>
                      <Button variant="light">
                        <User
                          name="Readella"
                          avatarProps={{
                            src: "/image/user.png",
                          }}
                        />
                        <ArrowDown />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="My account" variant="faded">
                      <DropdownItem
                        className="text-default-foreground"
                        key="login"
                        as={Link}
                        href="/login">
                        Login
                      </DropdownItem>
                      <DropdownItem
                        className="text-default-foreground"
                        key="register"
                        as={Link}
                        href="/register">
                        Register
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                )}
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </NextUINavbar>
    </>
  );
};
