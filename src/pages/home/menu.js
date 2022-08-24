import product from './../../data/product.json'
let filter = []
product.forEach((data) => {
  if(filter.some(value => value === data.brand)){
    return filter
  }else {
    filter.push(data.brand)
  }
})
console.log(filter)
export const menuItems = [
  {
    label : "Home",
    value : "home",
    key : "Home"
  },
  {
    label : "About",
    value : "about",
    key : "About"
  },
  {
    label : "Contact",
    value : "contact",
    key : "Contact"
  }
]

export const columns = [
  {
    title : "No",
    dataIndex : "id"
  },
  {
    title : "Name",
    dataIndex : "title",
    sorter: (a, b) => a.title.localeCompare(b.title)
  },
  {
    title : "Brand",
    dataIndex : "brand",
    filters : filter.map(data => ({text : data, value : data})),
    onFilter : (value, record) => record.brand.includes(value)
  },
  {
    title : "Image",
    dataIndex : "thumbnail",
    render : (data) => {
      return (
        <div style={{
          overflow : "hidden",
          width : "180px",
          height : "100px"
        }}>
          <img src={data} alt="preview" style={{width : '150px', borderRadius : '5px'}}/>
        </div>
      )
    }
  },
  {
    title : 'Price $',
    dataIndex : "price",
    render : (price) => <p>$ {price}</p>,
    sorter : (a,b) => a.price - b.price
  }
]