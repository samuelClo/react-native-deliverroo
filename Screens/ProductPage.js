import React from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "native-base";

import { MARGIN_LEFT_BODY } from './DeliverooHomePage'

import {
  ButtonCircleComponent
} from "../Components";

import { COLORS, TYPOGRAPHY } from "../Assets";
import { FEATURES } from '../Assets/DATA'

const FEATURE = FEATURES[0]

export const ProductPage = () => {
  const handleGoBack = () => {}
  const handleSearch = () => {}
  const handleShare = () => {}

  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      {/*HEADER*/}
      <View style={styles.headerWrapper}>
        <Image
          source={{ uri: FEATURE.url }}
          style={styles.headerPicture}
        />
        <View style={styles.headerButtonsWrapper}>
          <ButtonCircleComponent
            onPress={handleGoBack}
            name='long-arrow-left'
            style={styles.headerFirstButton}
          />
          <ButtonCircleComponent
            onPress={handleShare}
            name='share-alt'
          />
          <ButtonCircleComponent
            onPress={handleSearch}
            name='search'
            style={styles.headerLastButton}
          />
        </View>
        <View style={styles.CarouselDotWrapper}>
          <View style={styles.CarouselDot} />
          <View style={{ ...styles.CarouselDot, ...styles.CarouselDotActive }} />
          <View style={styles.CarouselDot} />
        </View>
      </View>
      {/*PRODUCT INFORMATIONS*/}
      <View style={styles.ProductInformationsWrapper}>
        <Text style={styles.productTitle}>
          {FEATURE.title}
        </Text>
        <Text style={styles.productDescribe}>
          {FEATURE.describe}
        </Text>
        <Text style={styles.productDistance}>
          {FEATURE.distance}
        </Text>
        <Text style={styles.productDescription}>
          {FEATURE.description}
        </Text>
        <Text style={styles.productRatingLabel}>
          Show rating details
        </Text>
        <View style={styles.deliveryWrapper}>
          <Image
            source={require("../Assets/Pictures/cyclist.png")}
            style={styles.deliveryPicture}
          />
          <Text style={styles.deliveryLabel}>
            {`Deliver in ${FEATURE.deliveryTime} min`}
          </Text>
        </View>
      </View>
      <View ></View>
    </ScrollView>
  );
};
const SEPARATOR_VALUE = 7
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#ffffff",
  },
  // HEADER
  headerPicture: {
    width: '100%',
    height: 220,
  },
  headerWrapper: {
    position: 'relative'
  },
  headerButtonsWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: MARGIN_LEFT_BODY,
  },
  headerFirstButton: {
    marginRight: 'auto'
  },
  headerLastButton: {
    marginLeft: 20
  },
  CarouselDotWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5
  },
  CarouselDot: {
    height: 6,
    width: 6,
    backgroundColor: COLORS.FONT.lightGray,
    borderRadius: 4,
    marginRight: 6
  },
  CarouselDotActive: {
    backgroundColor: COLORS.primary,
  },
  // PRODUCT
  ProductInformationsWrapper: {
    paddingHorizontal: MARGIN_LEFT_BODY
  },
  productTitle: {
    ...TYPOGRAPHY.H5,
    marginBottom: SEPARATOR_VALUE
  },
  productDescribe: {
    ...TYPOGRAPHY.M3,
    marginBottom: SEPARATOR_VALUE
  },
  productDistance: {
    ...TYPOGRAPHY.M3,
    marginBottom: SEPARATOR_VALUE
  },
  productDescription: {
    ...TYPOGRAPHY.M3,
    marginBottom: SEPARATOR_VALUE
  },
  productRatingLabel: {
    ...TYPOGRAPHY.M3,
    color: COLORS.primary,
    marginBottom: SEPARATOR_VALUE
  },
  deliveryWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  deliveryLabel: {
    ...TYPOGRAPHY.M1,
    color: COLORS.FONT.darkGray
  },
  deliveryPicture: {
    height: 32,
    width: 32,
    marginRight: 10
  }
});
