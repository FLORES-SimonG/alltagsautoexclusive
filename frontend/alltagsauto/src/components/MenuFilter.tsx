"use client";

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { FaCarAlt } from "react-icons/fa";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export function MenuFilter() {
  return (
    
      <Sidebar className=" fixed" >
        <h2 className=" font-semibold text-center h-20   items-center justify-center flex ">Menu Filter Test</h2>
        <Sidebar.Items className=" flex flex-col justify-between gap-3     ">
          <Sidebar.ItemGroup className="flex flex-col items-start justify-between  gap-1  px-5 ">
            <Sidebar.Item href="#" icon={FaCarAlt} className="flex flex-row gap-1 p-0">
              Autos
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaCarAlt} className="flex flex-row gap-1 p-0">
              Autos
            </Sidebar.Item>
            {/* <Sidebar.Item href="#" icon={HiChartPie} className="flex flex-row gap-1">
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox} className="flex flex-row gap-1">
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser} className="flex flex-row gap-1">
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag} className="flex flex-row gap-1">
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight} className="flex flex-row gap-1">
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable} className="flex flex-row gap-1">
              Sign Up
            </Sidebar.Item> */}
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup className="flex flex-col items-start justify-between  gap-1  px-5 ">
            {/* <Sidebar.Item href="#" icon={HiChartPie} className="flex flex-row gap-1">
              Upgrade to Pro
            </Sidebar.Item> */}
            <Sidebar.Item href="#" icon={HiViewBoards} className="flex flex-row gap-1 p-0">
            Kategorie
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy} className="flex flex-row gap-1 p-0">
              Hilfe
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    
  );
}
