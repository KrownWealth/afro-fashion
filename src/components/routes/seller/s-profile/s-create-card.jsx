import { addSellerItems, uploadImages } from '../../../../utils/writeBatch';
import FormField from '../../authentication/sign-up/form.component';
import { useLoading } from '../../../../contexts/loading.context';
import { UserContext } from '../../../../contexts/user.context';
import { useAlert } from '../../../../contexts/alert.context';
import { useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import { useState, useContext } from 'react';

import '../seller.styles.scss';

const defaultFormFields = {
  category: '',
  name: '',
  price: '',
  images: [],
  info: '',
}

export const SellerCreateCard = () => {
  
  const navigate = useNavigate();
  const addAlert = useAlert().addAutoCloseAlert;
  const { currentUser } = useContext(UserContext);
  const { showLoading, hideLoading } = useLoading();
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { category, name, price, info } = formFields;

  const generateRandomId = () => {
    const timestamp = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `${timestamp}-${randomNumber}`;
  }

  const brand = currentUser?.displayName;
  const path = `/seller/${brand.toLowerCase()}`;
  const id = generateRandomId();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleImgChange = (event) => {
    const { name, files } = event.target;
    setFormFields({ ...formFields, [name]: files });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const imagesArray = formFields.images;
      const imageUrls = await uploadImages(imagesArray, id);

      const itemsToAdd = {
        id: id,
        name: name,
        price: price,
        info: info,
        seller: brand,
        category: category,
        imageUrls: imageUrls,
      };
      
      setIsSubmitting(true);
      showLoading();
      await addSellerItems(category, itemsToAdd);

      addAlert("success", "You've successfully created a product!");

      setIsSubmitting(false);
      hideLoading();
      navigate(path);
    } catch (err) {
      hideLoading();
      console.error('Error adding items:', err.message);
    }
  };

  return (
    <>
      <Card className='card no-padding-container mx-auto'> 
        <div className='card-header flex-just-center bg-ws'>
          Add a Product to your Collection
        </div>

        <div className='card-body'>
          <form onSubmit={handleSubmit} action=''>
            <select onChange={handleChange} name='category'
              className="form-select centered-dropdown w-50">
              <option>Select category</option>
              <option value="kids">Kids</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="jerseys">Jersey</option>
              <option value="hats">Hats</option>
              <option value="accessories">Accessories</option>
              <option value="jackets">Jackets</option>
              <option value="sneakers">Sneakers</option>
              <option value="shoes">Shoes</option>
              <option value="slippers">Slippers</option>
              <option value="bags">Bags</option>
              <option value="senegalese">Senegalese</option>
            </select>

            <FormField 
              label={'What would you name this item?'}
              onChange={handleChange}
              type="text"
              value={formFields.name}
              name="name"
            />

            <section className="bg-ws">
                <div className="row">
                  <div className="col-md-12">
                    <div className="verify-sub-box">
                      <p className='flex-just-center fs-smaller mt-2 c-50'>
                        <i>Upload different clear images of this item</i>
                      </p>
                      <div className="p-1 m-1">
	                      <input 
                          onChange={handleImgChange}
                          accept=".jpg, .jpeg, .png"
                          id='upload-images'
                          name="images"
                          type="file"
                          multiple
                        />
	                    </div>
                    </div>
                </div>
              </div>
            </section>

            <FormField 
              label={'How much would this item cost?'}
              onChange={handleChange}
              type="number"
              value={formFields.price}
              name="price"
            />

            <textarea
              className='form-control' 
              placeholder={'Write some info for this item'} 
              onChange={handleChange}
              type="textarea"
              value={formFields.info} 
              rows={3}
              name="info"
            />

            <div className='mt-3 flex-just-center'>
              <Button type="submit" disabled={isSubmitting}>Submit</Button>
            </div>
          </form>
        </div> 
      </Card>
    </>
  )
}
