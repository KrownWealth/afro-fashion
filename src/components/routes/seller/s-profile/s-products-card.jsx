import { deleteSellerItem, editSellerItem } from '../../../../utils/writeBatch';
import { useLoading } from '../../../../contexts/loading.context';
import { BrandContext } from '../../../../contexts/brand.context';
import { useAlert } from '../../../../contexts/alert.context';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import '../seller.styles.scss';

export const SellerProducts = ({ sellerName }) => {
  const navigate = useNavigate();
  const seller = sellerName.toLowerCase();
  const { brandsMap } = useContext(BrandContext);
  const { showLoading, hideLoading } = useLoading();
  const [brands, setBrands] = useState(brandsMap[seller]);

  useEffect(() => {
    setBrands(brandsMap[seller]);
  }, [seller, brandsMap]);

  const { addOptionsAlert, addAutoCloseAlert } = useAlert();

  const handleDeleteProduct = async (category, itemId) => {
    const handleYes = () => {
      showLoading();
      deleteSellerItem(category, itemId);

      addAutoCloseAlert("success", 'Product Deleted!' )
      hideLoading();
      navigate(`/seller/${seller}`);
    };

    const handleNo = () => {
      addAutoCloseAlert("warning", 'Delete operation failed!');
    };

    addOptionsAlert(
      'danger',
      'This action is irreversible. Are you sure you want to delete this product?',
      handleYes, handleNo
    );
  };

  const Product = ({ category, product }) => {
    const [editProduct, setEditProduct] = useState(false);
    const [inputFields, setInputFields] = useState({
      name: product?.name || '',
      price: product?.price || '',
      info: product?.info || ''
    });

    const toggleEditProduct = () => setEditProduct(!editProduct);
  
    const handleInputChange = (field, value) => {
      setInputFields({ ...inputFields, [field]: value });
    };
  
    const handleFormSubmit = () => {
      showLoading();
      editSellerItem(product?.category, product?.id, inputFields);

      setEditProduct(false);
      addAutoCloseAlert("success", 'Product edited successfully!')

      hideLoading();
      navigate(`/seller/${seller}`);
    };

    return (
      <>
      <div className="product-bar" key={`${category}-${product?.id}`}>
        <span className="product-name">
          <b>{product?.name}</b>
        </span>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-warning"
            onClick={toggleEditProduct}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDeleteProduct(product?.category, product?.id)}
          >
            Delete
          </button>
        </div>
      </div>
      {editProduct && (
        <>
          <div className="input-group p-2 bg-ws">
            <div className="input-group-prepend">
              <span className="input-group-text">Edit name</span>
            </div>
            <input type="text" 
              className="form-control" 
              value={inputFields.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            <div className="input-group-prepend">
              <span className="input-group-text">Edit price</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={inputFields.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
            />
          </div>
          <div className="input-group p-2 bg-ws">
            <div className="input-group-prepend">
              <span className="input-group-text">Edit info</span>
            </div>
            <input
              type="text"
              className="form-control"
              value={inputFields.info}
              onChange={(e) => handleInputChange('info', e.target.value)}
            />
            <button
              onClick={handleFormSubmit}
              className="btn btn-outline-primary"
              type="button"
            >
              Submit Edit
            </button>
          </div>
        </>)}
      </>
    );
  };

  return (
    <div className="card container">
      {brands && Object.keys(brands).length > 0 ? (
        <div key={seller}>
          {Object.entries(brands).map(([category, categoryProducts]) => (
            <div className="category-card" key={category}>
              <h6 className="flex-just-center mt-2 font-awesome">
                {category.toUpperCase()}
              </h6>
              <hr />
              {categoryProducts.map((product) => (
                <Product
                  key={`${category}-${product?.id}`}
                  category={category}
                  product={product}
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <>
          <hr className="-mt" />
          <p className="mx-auto">
            No {sellerName} items are available at the moment...
          </p>
        </>
      )}
    </div>
  );
};