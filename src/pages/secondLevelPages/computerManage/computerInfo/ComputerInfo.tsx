import React, { useState } from "react";
import { Table } from "antd";

export default function ComputerInfo() {
  const [sortOrderTest, setSortOrderTest] = useState<string>("descend");
  const columns: any = [
    {
      title: "Name",
      dataIndex: "name",
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value: any, record: { name: string | any[] }) =>
        record.name.indexOf(value) === 0,
      sorter: (a: { name: string | any[] }, b: { name: string | any[] }) =>
        a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Age",
      dataIndex: "age",
      // defaultSortOrder: "descend",
      sortOrder: sortOrderTest,
      sortDirections: ["descend", "ascend"],
      showSorterTooltip: false,
      sorter: (a: { age: number }, b: { age: number }) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value: any, record: { address: string | any[] }) =>
        record.address.indexOf(value) === 0,
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    setSortOrderTest(sorter.order || "descend");
  };
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
}
