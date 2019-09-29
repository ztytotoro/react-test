export function createControl(name, component) {
    const option = options => ({
        type: name,
        ...options
    });
    return {
        type: name,
        render: component,
        option
    };
}
//# sourceMappingURL=control.js.map