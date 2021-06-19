const INITIAL_STATE = {
  sections: [
    {
      title: "WOMENS",
      subtitle: "SHOP NOW",
      imageUrl:
        "https://images.pexels.com/photos/2410770/pexels-photo-2410770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 1,
      linkUrl: "womens",
    },
    {
      title: "MENS",
      subtitle: "SHOP NOW",
      imageUrl:
        "https://images.pexels.com/photos/6198357/pexels-photo-6198357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 2,
      linkUrl: "mens",
    },
    {
      title: "HOME",
      subtitle: "SALE UP TO 30% OFF",
      imageUrl:
        "https://images.pexels.com/photos/6702549/pexels-photo-6702549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 3,
      linkUrl: "home",
    },
    {
      title: "BEAUTY",
      subtitle: "SALE UP TO 50% OFF",
      imageUrl:
        "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 4,
      linkUrl: "beauty",
    },
    {
      title: "LIFESTYLE",
      subtitle: "SHOP NOW",
      imageUrl:
        "https://images.pexels.com/photos/1665722/pexels-photo-1665722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 5,
      linkUrl: "lifestyle",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
