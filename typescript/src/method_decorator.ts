export function LogCall(prefix:string = '') {
    return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function() {
            var context = this
            var args = arguments;
            console.log(prefix, context, args);
            return originalMethod.apply(context, args);
        };
        return descriptor;
    }
};
