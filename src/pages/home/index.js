import React, { useState } from 'react'
import { Carousel, Modal, Table, Typography } from 'antd'
import { columns} from './menu'
import products from './../../data/product.json'
const {Title, Paragraph} = Typography

const MyTable = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState({
    brand: "",
    category: "",
    description: "",
    discountPercentage: 12.96,
    id: 0,
    images: [],
    price: 0,
    rating: 0,
    stock: 0,
    title: ""
  })
  const handleRecord = (record) => {
    setSelectedRecord(record)
    setShowModal(true)
  }

  const handleExit = () => {
    setShowModal(false)
  }

  return (
    <>
      <Typography style={{textAlign: "center"}}>
        <Title level={3}>Products</Title>
        <Paragraph>List of all Product Available</Paragraph>
     </Typography>
      <Table onRow={(record) => ({ onClick: (event) => { handleRecord(record) } })} dataSource={products} columns={columns} />
      <Modal title={selectedRecord.title} visible={showModal} onOk={handleExit} onCancel={handleExit}>
        <Carousel autoplay={true} autoplaySpeed={1200}>
          {selectedRecord?.images.map(image =>
            <div className='image-carousel'>
              <img src={image} alt="" />
            </div>
          )}
        </Carousel>
        <div style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <div>
            <span><strong>Name :</strong> {selectedRecord.title}</span><br />
            <span><strong>Brand :</strong> {selectedRecord.brand}</span><br />
            <span><strong>Price :</strong> $. {selectedRecord.price},00</span>
          </div>
          <div style={{
            marginLeft: "30px"
          }}>
            <span><strong>Stock :</strong> {selectedRecord.stock}</span><br />
            <span><strong>Discount :</strong> {selectedRecord.discountPercentage}</span><br />
            <span><strong>Rating :</strong> {selectedRecord.rating}/10</span>
          </div>
        </div>
        <hr />
        <p><strong>Description :</strong> <br />{selectedRecord.description}</p>
      </Modal>
    </>
  )
}

export default MyTable