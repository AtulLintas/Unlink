import React from "react";
import { FaBrain } from "react-icons/fa";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

export const SidebarItem = [
  {
    id:1,
    title: "Dashboard",
    path: "/",
    icon: <FaBrain />,
  },
  {
    id:2,
    title: "Fixed Asset Register",
    path: "/FixedAR",
    icon: <FaBrain />,
  },
  {
    id:3,
    title: "Master",
    path: "/master",
    icon: <FaBrain />,
    iconClosed: <GoTriangleDown />,
    iconOpen: <GoTriangleUp />,
    subItems: [
      {
        id:3.1,
        title: "Update Role",
        path: "/Master/Master1",
      },
      {
        id:3.2,
        title: "Add Permission",
        path: "/Master/Master2",
      },
      {
        id:3.3,
        title: "Create New User Role",
        path: "/Master/Master3",
      },
      {
        id:3.4,
        title: "Import App Master",
        path: "/Master/Master4",
      },
      {
        id:3.5,
        title: "Add Craft",
        path: "/Master",
      },
    ],
  },
  {
    id:4,
    title: "Contract Mgmt",
    path: "/ContractM",
    icon: <FaBrain />,
  },
  {
    id:5,
    title: "Asset Service Mgmt",
    path: "/AssetSM",
    icon: <FaBrain />,
  },
  {
    id:6,
    title: "Setting",
    path: "/Setting",
    icon: <FaBrain />,
    iconClosed: <GoTriangleDown />,
    iconOpen: <GoTriangleUp />,
    subItems: [
      {
        id:6.1,
        title: "Event Calendar",
        path: "/Setting/EventC",
      },
      {
        id:6.2,
        title: "Password Setting",
        path: "/Setting/PasswordS",
      },
      {
        id:6.3,
        title: "Create SLA",
        path: "/Setting/CreateSLA",
      },
      {
        id:6.4,
        title: "Part Configuration",
        path: "/Setting/PartC",
      },
    ],
  },
  {
    id:7,
    title: "Addition",
    path: "/Addition",
    icon: <FaBrain />,
  },
  {
    id:8,
    title: "Disposal",
    path: "/Disposal",
    icon: <FaBrain />,
  },
  {
    id:9,
    title: "Report",
    path: "/Report",
    icon: <FaBrain />,
    iconClosed: <GoTriangleDown />,
    iconOpen: <GoTriangleUp />,
    subItems:[
      {
        id:9.1,
        title: "Part Configuration",
        path: "/Setting/PartC",
      },
      {
        id:9.2,
        title: "Part Configuration",
        path: "/Setting/PartC",
      },
      {
        id:9.3,
        title: "Part Configuration",
        path: "/Setting/PartC",
      },
      {
        id:9.4,
        title: "Part Configuration",
        path: "/Setting/PartC",
      },
      {
        id:9.5,
        title: "Part Configuration",
        path: "/Setting/PartC",
      },
      {
        id:9.6,
        title: "Part Configuration",
        path: "/Setting/PartC",
      },
      {
        id:9.7,
        title: "Part Configuration",
        path: "/Setting/PartC",
      },
      {
        id:9.8,
        title: "Part Configuration",
        path: "/Setting/PartC",
      },
      {
        id:9.9,
        title: "Part Configuration",
        path: "/Setting/PartC",
      },

    ]
  },
];
