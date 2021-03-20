import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table, Row, Col, Typography } from "antd";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

function CartList({ cartList }) {
  let history = useHistory();
  useEffect(() => {
    console.log("CartList", cartList);
  }, [cartList]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Text",
      dataIndex: "text",
      key: "text",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
    },
  ];

  const goToProductList = () => {
    history.push("/");
  };

  return (
    <>
      <Row style={{ margin: "20px 20px" }}>
        <Col span={12}>
          <Title level={2}>Cart List</Title>
        </Col>
        <Col span={12} className="cart">
          <span className="go-to-product-list" onClick={goToProductList}>
            Go To Product List
          </span>
        </Col>
      </Row>
      <Table dataSource={cartList} columns={columns} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartList: state.product.cartList,
  };
};

export default connect(mapStateToProps, null)(CartList);
