import React from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "native-base";
import COLORS from "./../Assets/COLORS";

const CATEGORIES = [
  {
    label: "Offers",
    url: "https://www.crushpixel.com/big-static15/preview4/red-sale-web-banner-pop-2116681.jpg",
  },
  {
    label: "Grocery",
    url: "https://thumbs.dreamstime.com/b/shopping-paper-bag-different-groceries-dark-wooden-background-flat-lay-space-text-156220130.jpg",
  },
  {
    label: "Breakfast",
    url: "https://t3.ftcdn.net/jpg/01/41/19/42/360_F_141194240_CJaLbe3x2xL8wZfrB7rsYrYLYFFYfGUi.jpg",
  },
  {
    label: "Pizza",
    url: "https://www.cumanagement.com/sites/default/files/2019-09/pizza-box.jpg",
  },
  {
    label: "Japan",
    url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bento-3704d07.jpg",
  },
];
const NEWS = [
  {
    url: "https://blog.pizzahut.com/wp-content/uploads/2020/03/999_Postcard_R5_Option22.png",
  },
  {
    url: "https://www.whynotdeals.com/wp-content/uploads/2016/11/deliveroo-singapore-free-delivery-for-all-orders-promotion-3-5-45pm-22-24-nov-2016_why-not-deals-e1479771195704.jpg",
  },
  {
    url: "https://www.chewboom.com/wp-content/uploads/2020/01/McDonald%E2%80%99s-Welcomes-Back-2-For-5-Mix-Match-Deal-678x381.jpg",
  },
];
const FEATURES = [
  {
    url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/next-level-fried-chicken-dbd69d6.jpg",
    title: "🐓 Chicken Class By Urban Kitchens",
    note: "4.4 Very Good ",
    describe: " American - Chicken - Fried chicken - Salads",
    distance: "4.6 km away - Free delivery",
    delveryTime: "40 - 60",
    deliveryFree: true,
    promoLabel: "Free delivery",
  },
  {
    url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/next-level-fried-chicken-dbd69d6.jpg",
    title: "🐓 Chicken Class By Urban Kitchens",
    note: "4.4 Very Good ",
    describe: " American - Chicken - Fried chicken - Salads",
    distance: "4.6 km away - Free delivery",
    delveryTime: "40 - 60",
    deliveryFree: true,
    promoLabel: "10% off",
  },
  {
    url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/next-level-fried-chicken-dbd69d6.jpg",
    title: "🐓 Chicken Class By Urban Kitchens",
    note: "4.4 Very Good ",
    describe: " American - Chicken - Fried chicken - Salads",
    distance: "4.6 km away - Free delivery",
    delveryTime: "40 - 60",
    deliveryFree: true,
    promoLabel: "Free delivery",
  },
];

const DeliverooHomePage = () => {
  const renderCategories = ({ item }) => (
    <ImageBackground source={{ uri: item.url }} style={styles.category}>
      <Text style={styles.categoryLabel}>
        {item.label}
      </Text>
    </ImageBackground>
  );

  const renderNews = ({ item }) => (
    <ImageBackground source={{ uri: item.url }} style={styles.news}>
      <TouchableOpacity style={styles.newsCommandButton}>
        <Text style={styles.newsCommandLabel}>
          je commande
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );

  const renderFeatures = ({ item }) => (
    <View style={styles.wrapperFeature}>
      <View style={styles.wrapperFeatureImage}>
        <ImageBackground source={{ uri: item.url }} style={styles.featureImage}>
          <View style={styles.featurePromoWrapper}>
            <Text style={styles.featurePromoLabel}>
              {item.promoLabel}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.featureTimeWrapper}>
        <Text style={styles.featureTimeValue}>
          {item.delveryTime}
        </Text>
        <Text style={styles.featureTimeUnit}>
          min
        </Text>
      </View>
      <Text style={styles.featureTitle}>
        {item.title}
      </Text>

      <Text style={styles.featureDescriptionWrapper}>
        <Text style={styles.featureDescriptionNote}>
          {item.note}
        </Text>
        <Text>
          {item.describe}
        </Text>
      </Text>

      <Text>
        {item.distance}
      </Text>
    </View>
  );

  return (

    <View style={styles.wrapper}>
       {/*HEADER*/}
      <View style={styles.wrapperHeader}>
        {/* LOCATION-USER */}
        <View style={styles.wrapperLocationUser}>
          <Image
            source={require("../Assets/Pictures/cyclist.png")}
            style={styles.headerPicture}
          />
          <View style={styles.headerContent}>
            <Text style={styles.locationTimeLabel}>
              Now
            </Text>
            <View style={styles.locationWrapper}>
              <Text style={styles.locationLabel}>
                Current location
              </Text>
              <Icon
                name="chevron-down"
                size={15}
                color={COLORS.primary}
                style={styles.locationIcon}
              />
              {/* <MaterialIcons name="expand_more" color="#6aeac3" size={25} /> */}
            </View>
          </View>
          <View style={styles.headerUserIcon}>
            <Icon
              name="user"
              size={25}
              color={COLORS.primary}
            />
          </View>
        </View>
        {/* LIVRAISON TYPE */}
        <View style={styles.wrapperLivraisonType}>
          <View style={[styles.livraisonType, styles.livraisonTypeActive]}>
            <Text style={{ ...styles.livraisonTypeLabel, ...styles.livraisonTypeActiveLabel }}>
              Delivery
            </Text>
          </View>
          <View style={styles.livraisonType}>
            <Text style={styles.livraisonTypeLabel}>
              Pickup
            </Text>
          </View>
        </View>
        {/* INPUT-SETTINGS */}
        <View style={styles.wrapperInputSettings}>
          <View style={styles.wrapperInput}>
            <MaterialIcons
              name="search"
              color={COLORS.FONT.lightGray}
              size={22}
            />
            <TextInput
              placeholder="Dish, restaurants or cuisines"
              placeholderTextColor={COLORS.FONT.lightGray}
              style={styles.inputSettingInput}
            />
          </View>
          <Icon
            name="sliders"
            color={COLORS.primary}
            size={23}
            style={styles.settingIcon}
          />
        </View>
      </View>
      {/* BODY */}
      <View style={styles.body}>
        {/* CATEGORIES SLIDER */}
        <FlatList
          data={CATEGORIES}
          renderItem={renderCategories}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.categoriesSliderWrapper}
          numColumns={1}
          scrollEnabled
          horizontal
          style={styles.categoriesWrapper}
          showsHorizontalScrollIndicator={false}
        />
        {/* NEWS SLIDER*/}
        <FlatList
          data={NEWS}
          renderItem={renderNews}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.newsSliderWrapper}
          numColumns={1}
          scrollEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.trendingNowLabel}>
          Featured
        </Text>
        {/* FEATURES SLIDER*/}
        <FlatList
          data={FEATURES}
          renderItem={renderFeatures}
          keyExtractor={item => item.id}
          // contentContainerStyle={styles.featuresSliderWrapper}
          numColumns={1}
          scrollEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff'
  },
  // HEADER
  wrapperHeader: {
    paddingRight: 5,
    paddingLeft: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
  borderBottomColor: '#ededed'
  },
  // LOCATION-USER
  wrapperLocationUser: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  locationTimeLabel: {
    fontWeight: "200",
    fontSize: 14,
    color: "#babcbc",
  },
  locationLabel: {
    fontWeight: "bold",
    fontSize: 18,
  },
  locationWrapper: {
    flexDirection: "row",
  },
  headerContent: {
    flex: 1,
    marginLeft: 5,
  },
  wrapperLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerPicture: {
    height: 45,
    width: 45,
    borderRadius: 25,
  },
  locationIcon: {
    marginLeft: 7,
    marginTop: 5,
  },
  headerUserIcon: {
    height: 45,
    width: 45,
    backgroundColor: COLORS.lightGray,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  // LIVRAISON TYPE
  wrapperLivraisonType: {
    flexDirection: "row",
    marginBottom: 12,
  },
  livraisonType: {
    paddingVertical: 3,
    paddingHorizontal: 18,
    borderRadius: 20,
    color: COLORS.primary,
  },
  livraisonTypeActive: {
    backgroundColor: COLORS.primary,
  },
  livraisonTypeActiveLabel: {
    color: "#fff",
    fontWeight: "bold",
  },
  livraisonTypeLabel: {
    fontSize: 13,
    color: COLORS.primary,
  },
  // INPUT-SETTINGS
  wrapperInputSettings: {
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    color: COLORS.FONT.gray,
  },
  wrapperInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightGrayDarken,
    flex: 1,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
  inputSettingInput: {
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: 16,
    marginLeft: 7,
    borderRadius: 3,
  },
  settingIcon: {
    paddingRight: 12,
    paddingLeft: 19,
  },
  // BODY
  body: {
    paddingTop: 7,
    paddingLeft: 17,
    backgroundColor: COLORS.backgroundGray,
  },
  // CATEGORIES SLIDER
  categoryLabel: {
    color: "#ffff",
    fontWeight: "bold",
    textShadowColor: COLORS.gray,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    fontSize: 13,
  },
  category: {
    height: 85,
    width: 85,
    borderRadius: 3,
    marginRight: 7,
    justifyContent: "flex-end",
    paddingBottom: 7,
    paddingLeft: 5,
    overflow: "hidden",
  },
  categoriesWrapper: {
    marginBottom: 15,
  },
  // NEWS SLIDER
  newsSliderWrapper: {
    marginBottom: 15,
  },
  news: {
    justifyContent: "flex-end",
    width: 340,
    height: 170,
    borderRadius: 3,
    marginRight: 7,
    overflow: "hidden",
  },
  newsCommandButton: {
    marginBottom: 10,
    marginLeft: 10,
    paddingVertical: 4,

    paddingHorizontal: 7,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  newsCommandLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  // TRENDING NOW LABEL
  trendingNowLabel: {
    fontWeight: "bold",
    fontSize: 18,
    color: COLORS.FONT.darkGray,
    marginBottom: 15,
  },
  //FEATURES
  wrapperFeature: {
    marginRight: 7,
    flexDirection: "column",
    width: 310,
    overflow: 'hidden',
    position: "relative",
  },
  wrapperFeatureImage: {
    overflow: 'hidden',
    marginBottom: 15,
  },
  featureImage: {
    width: '100%',
    height: 180,
    borderRadius: 5,
    overflow: "hidden",
  },
  featurePromoWrapper: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 3,
    paddingVertical: 5,
    alignSelf: "flex-start",
    borderRadius: 5,
    marginTop: 7,
    marginLeft: 7,
  },
  featurePromoLabel: {
    fontSize: 14,
    color: "#fff",
  },
  featureTimeWrapper: {
    paddingVertical: 6,
    paddingHorizontal: 17,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
    overflow: "hidden",
    position: "absolute",
    bottom: 46,
    right: 22,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  featureTimeUnit: {
    textAlign: 'center',
    color: COLORS.FONT.gray,
    lineHeight: 14,
    fontSize: 14,
  },
  featureTimeValue: {
    fontSize: 17,
    fontWeight: "bold",
  },
  featureDescriptionWrapper: {
    // flexDirection: 'row',
  }
});

export default DeliverooHomePage;
