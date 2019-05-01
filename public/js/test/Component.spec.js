const mockProps = {
    prop_one: 1,
    prop_two: 'two',
    prop_three: null,
    prop_four: undefined,
    prop_five: {
        another_prop_key: 'another prop value',
        deeper_prop: {
            very_deep_prop: 'this is a very deep prop',
            dont_change: 'dont change this props'
        }
    },
    prop_six: [1,2,3,4,5,6],
};

const mockState = {
    state_one: 1,
    state_two: 'two',
    state_three: null,
    state_four: undefined,
    state_five: {
        another_state_key: 'another state value',
        deeper_state: {
            very_deep_state: 'this is a very deep state',
            dont_change: 'dont change this state',
        },
    },
    state_six: [1,2,3,4,5,6],
};

let basicComponent;

beforeEach(() => {
    basicComponent = new Components.Component('<div>', mockProps);
});

describe('Test Component structure', () => {
    it('should be able to instantiate new Component', () => {
        expect(basicComponent).toBeDefined();
    });
    
    it('should have render() function', () => {
        expect(basicComponent.render).toBeDefined();
        expect(typeof basicComponent.render).toEqual('function');
    });
});

describe('Test props', () => {
    it('should not mutate', () => {
        const newProp = 'change prop directly';
        basicComponent.props.prop_one = newProp;
        expect(basicComponent.props.prop_one).not.toEqual(newProp);
        expect(basicComponent.props.prop_one).toEqual(mockProps.prop_one);
    });

    it('should mutate through render() function', () => {
        const newProp = 'change prop through render() function';
        
        basicComponent.props.prop_one = newProp;
        expect(basicComponent.props.prop_one).not.toEqual(newProp);
        expect(basicComponent.props.prop_one).toEqual(mockProps.prop_one);
        
        basicComponent.render({
            prop_one: newProp,
        });
        expect(basicComponent.props.prop_one).not.toEqual(mockProps.prop_one);
        expect(basicComponent.props.prop_one).toEqual(newProp);
    });
});

describe('Test state', () => {
    it('should not mutate', () => {
        basicComponent.setState(mockState);
        const newValue = 'changing state directly';
        basicComponent.state.state_one = newValue;
        expect(basicComponent.state.state_one).not.toEqual(newValue);
        expect(basicComponent.state.state_one).toEqual(mockState.state_one);
    });
    
    it('should mutate state with setState() function', () => {
        basicComponent.setState(mockState);
        const newValue = 'changing state through setState() function';

        basicComponent.state.state_one = newValue;
        expect(basicComponent.state.state_one).not.toEqual(newValue);
        expect(basicComponent.state.state_one).toEqual(mockState.state_one);
        
        basicComponent.setState({
            state_one: newValue,
        });
        expect(basicComponent.state.state_one).not.toEqual(mockState.state_one);
        expect(basicComponent.state.state_one).toEqual(newValue);
    });
    
    it('should mutate deep with setState() function', () => {
        basicComponent.setState(mockState);
        const newValue = 'new deep state';
        basicComponent.setState({
            state_five: {
                deeper_state: {
                    very_deep_state: newValue,
                }
            },
        });
        expect(basicComponent.state.state_five.deeper_state.very_deep_state).not.toEqual(mockState.state_five.deeper_state.very_deep_state);
        expect(basicComponent.state.state_five.deeper_state.very_deep_state).toEqual(newValue);
    
        expect(basicComponent.state.state_one).toEqual(mockState.state_one);
        expect(basicComponent.state.state_six).toEqual(mockState.state_six);
        expect(basicComponent.state.state_five.deeper_state.dont_change).toEqual(mockState.state_five.deeper_state.dont_change);
    });
});
