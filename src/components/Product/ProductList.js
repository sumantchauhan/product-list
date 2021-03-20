import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Table, Modal, Row, Col, Typography, message, Popconfirm } from "antd";
import { getProductList, addCartList } from "../../redux/actions/productAction";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./ProductList.scss";
import ProductSearch from "../Search";
import { useHistory } from "react-router-dom";
import AddCart from "../AddCart";

const { Title } = Typography;

const ProductList = ({ product, addCartList, CartList, ...props }) => {
  const [productsList, setProductList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [cartEle, setCartEle] = useState({});
  const history = useHistory();
  const [text, setText] = useState("");
  const [discount, setDiscount] = useState("");

  const onTextChange = (value) => {
    setText(value);
  };

  const onDiscountChange = (value) => {
    setDiscount(value);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
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
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (item) => (
        <Popconfirm
          title="Are you sure to add this item to cart?"
          onConfirm={() => confirm(item)}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <a>Add To Cart</a>
        </Popconfirm>
      ),
    },
  ];

  const handleOk = () => {
    let data = cartEle;
    data["text"] = text;
    data["discount"] = discount;
    let CartList = cartList;
    CartList.push(data);
    setCartList(CartList);
    addCartList(CartList);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function confirm(cartElement) {
    console.log(cartElement);
    setCartEle(cartElement);
    setText("");
    setDiscount("");
    setIsModalVisible(true);
  }

  function cancel(e) {}

  useEffect(() => {
    props.getProductList();
  }, []);

  useEffect(() => {
    setCartList(CartList);
  }, [CartList]);

  const onInputChange = (value) => {
    if (value.length === 0) {
      props.getProductList();
    }
  };

  const onSearch = (value) => {
    if (value !== "" && value.length > 2) {
      let Products = productsList.filter((item) => {
        if (
          item.product === value ||
          item.mobile === value ||
          item.username === value
        ) {
          return item;
        }
      });
      setProductList(Products);
    } else {
      message.info("Search text is less than 3 characters", 2);
    }
  };

  useEffect(async () => {
    setProductList(product);
  }, [product]);

  const onCartList = () => {
    history.push("/cartList");
  };

  return (
    <div>
      <Row style={{ margin: "20px 20px" }}>
        <Col span={8}>
          <Title level={2}>Product List</Title>
        </Col>
        <Col span={8}>
          <ProductSearch onSearch={onSearch} onInputChange={onInputChange} />
        </Col>
        <Col span={8} className="cart">
          <span className="product-list" onClick={onCartList}>
            <ShoppingCartOutlined /> Cart List
          </span>
        </Col>
      </Row>
      <Table columns={columns} dataSource={productsList} />
      <Modal
        title="Add Cart"
        okText="Add To Cart"
        visible={isModalVisible}
        maskClosable={false}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddCart
          onTextChange={onTextChange}
          onDiscountChange={onDiscountChange}
          text={text}
          discount={discount}
        />
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product.productList,
    CartList: state.product.cartList,
  };
};

export default connect(mapStateToProps, { getProductList, addCartList })(
  ProductList
);
