import { createStackNavigator } from "react-navigation";
import Step1 from "./onboarding/Step1";
import Step2 from "./onboarding/Step2";
import Step3 from "./onboarding/Step3";
import Step4 from "./onboarding/Step4";
import Step5 from "./onboarding/Step5";
export default createStackNavigator({
  Home: {
    screen: Step1,
    navigationOptions: () => ({
      header: null
    })
  },
  Step2: {
    screen: Step2,
    navigationOptions: () => ({
      header: null
    })
  },
  Step3: {
    screen: Step3,
    navigationOptions: () => ({
      header: null
    })
  },
  Step4: {
    screen: Step4,
    navigationOptions: () => ({
      header: null
    })
  },
  Step5: {
    screen: Step5,
    navigationOptions: () => ({
      header: null
    })
  }
});
