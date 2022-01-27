class Context {
    // constructor(value) {
    //     this.value = value;
    // }

    Provider = ({ children, value }) => {
        this.value = value;
        return children;
    };

    Consumer = ({ children }) => children(this.value);
}

const createContext = () => {
    const context = new Context();

    return {
        Provider: context.Provider,
        Consumer: context.Consumer,
    };
};

export default createContext;
