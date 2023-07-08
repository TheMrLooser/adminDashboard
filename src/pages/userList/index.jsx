import React from "react";
import TableList from "../../components/Table";
import { UserJson } from "../../json/user";
import { Button, Space, Switch } from "antd";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
const UserList = () => {
  const Actions = [
    {
      title: "Mentor",
      key: "mentor",
      render: () => (
        <>
          <Switch defaultChecked />
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size={"middle"}>
          <Button icon={<DeleteOutlined />} danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <TableList
      title="User List"
      data={UserJson.dataSource}
      columns={UserJson.columns}
      actions={Actions}
      extra={<Button icon={<PlusCircleOutlined />}>Add User</Button>}
    />
  );
};

export default UserList;