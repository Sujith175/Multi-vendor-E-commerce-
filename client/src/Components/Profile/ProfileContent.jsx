import React, { useState } from "react";
import { backend_url } from "../../server";
import { useSelector } from "react-redux";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import styles from "../../Styles/styles";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { MdOutlineTrackChanges } from "react-icons/md";

const ProfileContent = ({ active }) => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [name, setName] = useState(user && user.user.name);
  const [email, setEmail] = useState(user && user.user.email);
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full">
      {/* profile page */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user.user.avatar.public_id}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#e3e9ee] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full flex pb-3">
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Email ID</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="-full flex pb-3">
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Zip Code</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="-full flex pb-3">
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Address 1</label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>

                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Address 2</label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={`w-[250px] h-[40px] border border-[#a69006] text-center text-[#a69006] rounded-[3px] mt-8 cursor-pointer`}
                value="Update"
                type="submit"
                required
              />
            </form>
          </div>
        </>
      )}

      {/* order page */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}

      {/* Refund page */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}

      {/* TrackOrder page */}
      {active === 5 && (
        <div>
          <TrackOrders />
        </div>
      )}

      {/* TrackOrder page */}
      {active === 6 && (
        <div>
          <PaymentMethod />
        </div>
      )}

      {/* Uer address page page */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  const orders = [
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 300 },
    {
      field: "itemsQty",
      headerName: "itemsQty",
      width: 150,
      editable: true,
    },
    {
      field: "total",
      headerName: "total",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "status",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: " ",
      flex: 1,
      headerName: "",
      type: "number",
      minWidth: 150,
      editable: true,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <button className="cursor-pointer mr-10" title="view Details">
                <AiOutlineArrowRight size={20} />
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <>
      <div className="pl-8 pt-1">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableRowSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
};

const AllRefundOrders = () => {
  const orders = [
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 300 },
    {
      field: "itemsQty",
      headerName: "itemsQty",
      width: 150,
      editable: true,
    },
    {
      field: "total",
      headerName: "total",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "status",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: " ",
      flex: 1,
      headerName: "",
      type: "number",
      minWidth: 150,
      editable: true,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <button className="cursor-pointer mr-10" title="view Details">
                <AiOutlineArrowRight size={20} />
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <>
      <div className="pl-8 pt-1">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableRowSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
};

const TrackOrders = () => {
  const orders = [
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 300 },
    {
      field: "itemsQty",
      headerName: "itemsQty",
      width: 150,
      editable: true,
    },
    {
      field: "total",
      headerName: "total",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "status",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: " ",
      flex: 1,
      headerName: "",
      type: "number",
      minWidth: 150,
      editable: true,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <button className="cursor-pointer mr-10" title="view Details">
                <MdOutlineTrackChanges size={20} />
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <>
      <div className="pl-8 pt-1">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableRowSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
};

const PaymentMethod = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          Payment Methods
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-[#fff]"> Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center ">
          <img
            src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
            alt=""
          />
          <h5 className="pl-5 font-[600]">Sujith Kumar R</h5>
        </div>
        <div className="pl-8 flex items-center ">
          <h6>1234**** *** **** ****</h6>
          <h5 className="pl-6 ">08/2022</h5>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const Address = () => {
  return (
    <>
      <div className="w-full px-5">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
            My Addresses
          </h1>
          <div className={`${styles.button} !rounded-md`}>
            <span className="text-[#fff]"> Add New</span>
          </div>
        </div>
        <br />
        <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
          <div className="flex items-center ">
            <h5 className="pl-5 font-[600]">Default</h5>
          </div>
          <div className="pl-8 flex items-center ">
            <h6>494 Erdan Passage, New Jersey, Paramount</h6>
          </div>

          <div className="pl-8 flex items-center ">
            <h6>(123) 087-9165</h6>
          </div>

          <div className="min-w-[10%] flex items-center justify-between pl-8">
            <AiOutlineDelete size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileContent;
