/*
 * @Description: 
 * @Version: 1.0
 * @Author: shenkai03
 * @Date: 2024-06-08 11:28:06
 * @LastEditors: shenkai03
 * @LastEditTime: 2024-06-17 14:56:49
 * @FilePath: /StickerSmash/components/ImageViewer.js
 * Copyright (C) 2024 shenkai03. All rights reserved.
 */
import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource ,selectedImage}) {
  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;

  return (
    <Image source={imageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
