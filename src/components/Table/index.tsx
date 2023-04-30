import { dataSource } from "data/users";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface I_Data {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  description: string;
}

const data = dataSource.map((item) => ({
  ...item,
  description: `My name is ${item.firstName}, I am ${item.age} years old, living in ${item.city}`,
}));

const columns: ColumnsType<I_Data> = [
  {
    title: "FirstName",
    dataIndex: "firstName",
  },
  {
    title: "LastName",
    dataIndex: "lastName",
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "City",
    dataIndex: "city",
    filters: [
      {
        text: "Los Angeles",
        value: "Los Angeles",
      },
      {
        text: "New York",
        value: "New York",
      },
      {
        text: "Stafford",
        value: "Stafford",
      },
    ],
    onFilter: (value: string | number | boolean, record: I_Data) =>
      record.city.indexOf(value.toString()) === 0,
    filterSearch: true,
  },
  {
    title: "Action",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

const rowSelection = {
  getCheckboxProps: (record: I_Data) => ({
    disabled: record.firstName === "Justin",
    firstName: record.firstName,
  }),
};

export const _Table = () => {
  return (
    <Table
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      dataSource={data}
      columns={columns}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: [5, 10, 15],
      }}
      scroll={{ y: 240, x: 1300 }}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        ),
        rowExpandable: (record) => record.firstName !== "Not Expandable",
      }}
      bordered
      title={() => "Header"}
      footer={() => "Footer"}
    />
  );
};
