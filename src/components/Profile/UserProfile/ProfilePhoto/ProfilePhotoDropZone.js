import React, { useCallback, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUpdateProfilePhoto } from '../../../../redux/profile/actions';
import { useDropzone } from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import { getCroppedImg } from '../../../../utils/cropImage';
import { verifyFile } from '../../../../utils/verifyFile';
import Button from '../../../Button/Button';

import { UploadOutlined } from '@ant-design/icons';

import 'react-image-crop/lib/ReactCrop.scss';
import styles from './ProfilePhotoDropZone.module.scss';

const defaultCrop = {
  aspect: 1 / 1,
  width: 250,
  height: 250,
};

const ProfilePhotoDropZone = (props) => {
  const [mainPhoto, setMainPhoto] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [crop, setCrop] = useState(defaultCrop);
  const [imageRef, setImageRef] = useState(null);

  const onDrop = useCallback((accepted, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      console.log('reject from upload file');
      return;
    }

    const isVerified = verifyFile(accepted);
    if (isVerified) {
      const currentFile = accepted[0];
      setMainPhoto(currentFile);
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(currentFile);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onImageLoaded = (image) => {
    setImageRef(image);
  };

  useEffect(() => {
    makeClientCrop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageRef]);

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const makeClientCrop = async () => {
    if (imageRef && crop.width && crop.height) {
      const croppedImage = getCroppedImg(imageRef, crop);
      setCroppedImage(croppedImage)
    }
  };

  const onCropCompleted = () => {
    makeClientCrop(crop);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    props.fetchUpdateProfilePhoto({
      large: mainPhoto,
      small: croppedImage,
    });
    props.handlerAfterSave();
  };

  const closeBtnHandler = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.profilePhoto}>
      <div className={`${styles.uploadInputWrapper} text-center`} {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Переместите сюда изображение...</p>
        ) : (
          <p>Переместите или выберите изображение для загрузки</p>
        )}
        <UploadOutlined />
      </div>
      {selectedImage && (
        <div className={styles.cropContainer}>
          <form onSubmit={onSubmitForm}>
            {/* <h2 className={styles.title}>Выберите миниатюру</h2> */}
            <div className={styles.cropWrapper}>
              <ReactCrop
                onComplete={onCropCompleted}
                onImageLoaded={onImageLoaded}
                onChange={onCropChange}
                crop={crop}
                src={selectedImage}
              />
              <div className={styles.editBox}>
                <div className={styles.croppedImage}>
                  <img src={croppedImage} alt="" />
                </div>
                <p>Подберите миниатюру</p>
                <div className="btn-group">
                  <Button text="Сохранить" classNames={['btn-primary']} />
                  <Button text="Выйти" onClickHandler={closeBtnHandler} classNames={['btn-secondary']} />
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  fetchUpdateProfilePhoto,
};

export default connect(null, mapDispatchToProps)(ProfilePhotoDropZone);
