const Loading = ({ color, className, ...props }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M7.57027 1.50044C6.38366 1.48656 5.21958 1.82485 4.22524 2.47255C3.2309 3.12025 2.45095 4.04826 1.98403 5.13922C1.51711 6.23019 1.38418 7.43512 1.60205 8.60163C1.81993 9.76815 2.37883 10.8439 3.20807 11.6927C4.03731 12.5416 5.09964 13.1255 6.26074 13.3706C7.42184 13.6158 8.62955 13.5111 9.73114 13.0698C10.8327 12.6285 11.7787 11.8705 12.4495 10.8916C13.1203 9.91268 13.4858 8.75684 13.4996 7.57024"
        stroke={color || 'currentColor'}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Loading;
