export function parseIconClasses(className: string = ''): {
  containerClasses: string;
  svgClasses: string;
} {
  const svgClassPrefixes = ['text-'];
  const allClasses = className.split(/\s+/);
  const containerClasses: string[] = [];
  const svgClasses: string[] = [];

  allClasses.forEach((cls) => {
    if (svgClassPrefixes.some((prefix) => cls.startsWith(prefix))) {
      svgClasses.push(cls);
    } else {
      containerClasses.push(cls);
    }
  });

  return {
    containerClasses: containerClasses.join(' '),
    svgClasses: svgClasses.join(' '),
  };
}
