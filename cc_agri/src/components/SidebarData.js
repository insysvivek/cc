// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
       
		title: "Manage Masters",
		
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Clusters",
				path: "/about-us/aim",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Village",
				path: "/about-us/aim",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Farmer Registration",
				path: "/about-us/aim",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Harvesting Order",
				path: "/about-us/vision",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Field Operations",
		
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Plantation",
				path: "/Plantation",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Plantation List",
				path: "/PlantList",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Order Generation",
				path: "/OrderGeneration",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Permission Slip",
				path: "/PermissionSlip",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Joint Order",
				path: "/PermissionSlip",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Token Queue List",
				path: "/PermissionSlip",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
		],
	},
	{
		title: "Farmer Details", 
		path: "/FarmerData",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		// subNav: [
		// 	{
		// 		title: "Service 1",
		// 		path: "/services/services1",
		// 		icon: <IoIcons.IoIosPaper />,
		// 		cName: "sub-nav",
		// 	},
		// 	{
		// 		title: "Service 2",
		// 		path: "/services/services2",
		// 		icon: <IoIcons.IoIosPaper />,
		// 		cName: "sub-nav",
		// 	},
		// 	{
		// 		title: "Service 3",
		// 		path: "/services/services3",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// ],
	},
	{
		title: "Reports",
		path: "/contact",
		icon: <FaIcons.FaPhone />,
		subNav: [
			{
				title: "Plantation Reports in Summary",
				path: "/services/services1",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Plantation Detail Report",
				path: "/services/services2",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
		],
	},

	// {
	// 	title: "Events",
	// 	path: "/events",
	// 	icon: <FaIcons.FaEnvelopeOpenText />,

	// 	iconClosed: <RiIcons.RiArrowDownSFill />,
	// 	iconOpened: <RiIcons.RiArrowUpSFill />,

	// 	subNav: [
	// 		{
	// 			title: "Event 1",
	// 			path: "/events/events1",
	// 			icon: <IoIcons.IoIosPaper />,
	// 		},
	// 		{
	// 			title: "Event 2",
	// 			path: "/events/events2",
	// 			icon: <IoIcons.IoIosPaper />,
	// 		},
	// 	],
	// },

	{
		title: "Support",
		path: "/support",
		icon: <IoIcons.IoMdHelpCircle />,
	},
];
