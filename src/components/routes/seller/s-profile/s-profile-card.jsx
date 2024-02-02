import { updateSeller, uploadImageAndGetUrl } from "../../../../utils/writeBatch";
import { Row, Col, Card, ListGroup, Container } from "react-bootstrap"; 
import { useLoading } from '../../../../contexts/loading.context';
import { UserContext } from '../../../../contexts/user.context';
import { useAlert } from "../../../../contexts/alert.context";
import { MdUpload, MdCloudDone } from "react-icons/md"
import { useState, useContext } from 'react';

import "./s-profile.styles.scss";

export const SellerProfileCard = ({ 
  sellerName, 
  phone, 
  address, 
  imageUrl, 
  badge, 
  bankAcct 
  }) => {
    
  let blankAvi = "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="

  const { showLoading, hideLoading } = useLoading();
  const [ inputFields, setInputFields ] = useState({
    phone: phone || '',
    name: sellerName || '',
    address: address || '',
    bankAcct: bankAcct || '',
    imageUrl: imageUrl || blankAvi,   
  });
  const [ imgFile, setImgFile ] = useState(null);
  const [ image, setImage ] = useState(null);
  const { userId } = useContext(UserContext);
  const { addAutoCloseAlert } = useAlert();

  const sellerId = userId;

  const handleInputChange = (field, value) => {
    setInputFields({ ...inputFields, [field]: value });
  };

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImgFile(file);
    } else setImgFile(image)
  };

  const handleEditInfo = async (inputField, value) => {
    if (!inputField || !value) {
      addAutoCloseAlert("warning", `Empty ${inputField} field`)
      return;
    }
    showLoading();

    try {
      await updateSeller(sellerId,`${inputField}`, value);

      addAutoCloseAlert("success", `Seller ${inputField} updated!`);
    } catch (err) {

      console.error("Error updating info:", err);
      addAutoCloseAlert("danger", `Failed to update ${inputField}!`);
    } finally {
      hideLoading();
    }
  }

  const handleImgUpload = async (imageFile) => {
    if (!imageFile) {
      addAutoCloseAlert("warning", 'Empty image field');
      return;
    }
    showLoading();

    try {
      const imageUrl = await uploadImageAndGetUrl(imageFile, sellerId);
      setImage(imageUrl);
      setInputFields({
        ...inputFields,
        imageUrl: imageUrl,
      });
      await updateSeller(sellerId, 'imageUrl', imageUrl);

      addAutoCloseAlert("success", 'Profile photo updated!');
      setImgFile(null);
    } catch (error) {

      console.error("Error uploading image:", error);
      addAutoCloseAlert("danger", "Failed to upload image");
    } finally {
      hideLoading();
    }
  }

  return (
    <Container className="no-padding-container">            
      <div className="card container each-sell-container">
        <div className="p-2">
        <Row className="mx-auto">
          <Col className="flex-just-center mb-2 avatar"> 
            <img
              src={imageUrl || blankAvi}
              className="rounded-circle"
              alt="profile avatar"
            />
          </Col>
          
          <div className="flex-just-center mb-2">
            <div className="p-1 m-1">
	            <input 
                onChange={handleImgChange}
                accept=".jpg, .jpeg, .png"
                id='file-input'
                name="image"
                type="file"
              />
	          </div>
            <span onClick={() => handleImgUpload(imgFile)}>
              <MdUpload size={25}/>
            </span>
          </div>

          <Col className="col-md-10 mx-auto"> 
            <Card>
              <Card.Header className="profile-info">
                <b>Personal Information</b>
              </Card.Header>

              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between">
                  <span className="fs-smaller v-center">
                    <b className="s-bold">Brand Name</b> 
                  </span> 
                  <input type="text" 
                    className="form-control m-1" 
                    value={inputFields.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                  <span onClick={() => handleEditInfo('brandName', inputFields.name)} className="v-center">
                    <MdCloudDone size={20}/>
                  </span>
                </ListGroup.Item>
          
                <ListGroup.Item className="d-flex justify-content-between">
                  <span className="fs-smaller v-center">
                    <b className="s-bold">Phone</b>
                  </span>
                  <input type="text" 
                    className="form-control m-1" 
                    value={inputFields.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  /> 
                  <span onClick={() => handleEditInfo('phone', inputFields.phone)} className="v-center">
                    <MdCloudDone size={20}/>
                  </span>
                </ListGroup.Item>
          
                <ListGroup.Item className="d-flex justify-content-between">
                  <span className="fs-smaller v-center">
                    <b className="s-bold">Address</b>
                  </span>
                  <input type="text" 
                    className="form-control m-1" 
                    value={inputFields.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                  <span onClick={() => handleEditInfo('address', inputFields.address)} className="v-center">
                    <MdCloudDone size={20}/>
                  </span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between">
                  <span className="fs-smaller v-center">
                    <b className="s-bold">Bank Account</b>
                  </span>
                  <input type="text" 
                    className="form-control m-1" 
                    value={inputFields.bankAcct}
                    onChange={(e) => handleInputChange('bankAcct', e.target.value)}
                  />
                  <span onClick={() => handleEditInfo('bankAcct', inputFields.bankAcct)} className="v-center">
                    <MdCloudDone size={20}/>
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        </div>
      </div>
    </Container>
  );
};