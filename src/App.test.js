import App from './App';
import { shallow } from 'enzyme';


describe("Counter Testing" , () => {
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<App />);
  })

  test('render the title of the counter', () => {
    expect(wrapper.find('h1').text()).toContain("This is counter app")
  });

  test("render a button with text of 'increment'", () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  })

  test("render the initial value of state in ad div.", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  })
  
  test("render the click event of the increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("1")
  })
    
  test("render the click event of the decrement button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("1")
    wrapper.find("#decrement-btn").simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })
})

