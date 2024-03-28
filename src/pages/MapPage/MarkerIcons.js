import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
    shadowAnchor: [12, 41],
    iconSize: [24, 41],
    shadowSize: [24, 41],
  });
  
export const NatureIcon = L.divIcon({
html: `
<svg
width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" rx="100" fill="#62B944"/>
<path d="M63.25 152V141.6H94.75V120.8H84.25C76.9875 120.8 70.796 118.264 65.6755 113.192C60.555 108.121 57.9965 101.99 58 94.8C58 89.6 59.4438 84.8108 62.3313 80.4324C65.2188 76.054 69.1125 72.8699 74.0125 70.88C74.8 64.38 77.6665 58.9408 82.612 54.5624C87.5575 50.184 93.3535 47.9965 100 48C106.65 48 112.448 50.1892 117.393 54.5676C122.339 58.946 125.204 64.3835 125.988 70.88C130.888 72.8733 134.781 76.0592 137.669 80.4376C140.556 84.816 142 89.6035 142 94.8C142 101.993 139.44 108.126 134.319 113.198C129.199 118.269 123.009 120.803 115.75 120.8H105.25V141.6H136.75V152H63.25Z" fill="black" fill-opacity="0.7"/>
</svg>`,
className: "",
iconSize: [40, 40],
iconAnchor: [40, 40],
});

export const CultureIcon = L.divIcon({
html: `
<svg
width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" rx="100" fill="#B99844"/>
<path d="M100 47L55 70.5714V80H145V70.5714M121.316 89.4286V122.429H135.526V89.4286M55 146H145V131.857H55M92.8947 89.4286V122.429H107.105V89.4286M64.4737 89.4286V122.429H78.6842V89.4286H64.4737Z" fill="black" fill-opacity="0.7"/>
</svg>`,
className: "",
iconSize: [40, 40],
iconAnchor: [40, 40],
});

export const HistoryIcon = L.divIcon({
html: `
<svg
width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" rx="100" fill="#5EC7A1"/>
<path d="M140 152H59V140.986C59 138.224 61.2386 135.986 64 135.986H135C137.761 135.986 140 138.224 140 140.986V152ZM124.699 63.7002H111.186V52C111.186 49.2386 108.947 47 106.186 47H93.9403C91.1789 47 88.9403 49.2386 88.9403 52V63.7002H74.3009V52C74.3009 49.2386 72.0623 47 69.3009 47H64.6588C61.8974 47 59.6588 49.2386 59.6588 52V77.339H139.341V52C139.341 49.2386 137.103 47 134.341 47H129.699C126.938 47 124.699 49.2386 124.699 52V63.7002ZM131.004 81.6441H67.9964V131.715H131.004V81.6441Z" fill="black" fill-opacity="0.7"/>
</svg>`,
className: "",
iconSize: [40, 40],
iconAnchor: [40, 40],
});

export const ReligionIcon = L.divIcon({
html: `
<svg
width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" rx="100" fill="#4496B9"/>
<path d="M90.4 151V130.8C90.4 128.121 91.4641 125.552 93.3582 123.658C95.2523 121.764 97.8213 120.7 100.5 120.7C103.179 120.7 105.748 121.764 107.642 123.658C109.536 125.552 110.6 128.121 110.6 130.8V151H130.8V100.5C130.8 99.6286 130.574 98.7721 130.145 98.0137C129.716 97.2553 129.098 96.6209 128.351 96.1721L105.55 82.4917V70.2H115.65V60.1H105.55V50H95.45V60.1H85.35V70.2H95.45V82.4917L72.6493 96.1721C71.9023 96.6209 71.2842 97.2553 70.855 98.0137C70.4258 98.7721 70.2002 99.6286 70.2 100.5V151H90.4ZM65.15 151V110.004L52.7927 116.185C51.9532 116.603 51.2471 117.248 50.7537 118.045C50.2604 118.843 49.9993 119.762 50 120.7V151C55.05 151 60.1 151 65.15 151ZM148.207 116.18L135.85 110.004V151C140.284 151 151 151 151 151V120.7C151 118.786 149.919 117.039 148.207 116.18Z" fill="black" fill-opacity="0.7"/>
</svg>`,
className: "",
iconSize: [40, 40],
iconAnchor: [40, 40],
});

export const IndustryIcon = L.divIcon({
html: `
<svg
width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" rx="100" fill="#B7B944"/>
<path d="M141.084 82.7089L115 99.3079V86.5054C115 82.9587 111.075 80.8056 108.084 82.7089L82 99.3079V62.5C82 60.0147 79.9853 58 77.5 58H56.5C54.0147 58 52 60.0147 52 62.5V137.5C52 139.985 54.0147 142 56.5 142H143.5C145.985 142 148 139.985 148 137.5V86.5054C148 82.9585 144.075 80.8056 141.084 82.7089Z" fill="black" fill-opacity="0.7"/>
</svg>`,
className: "",
iconSize: [40, 40],
iconAnchor: [40, 40],
});

export const UnknownIcon = L.divIcon({
    html: `
    <svg
    width="200" height="201" viewBox="0 0 200 201" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_312)">
      <rect y="0.5" width="40" height="40" rx="100" fill="#B97C44"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M105.2 43.6655C105.2 42.1629 104.599 40.7219 103.531 39.6594C102.462 38.5969 101.012 38 99.5 38C97.9883 38 96.5384 38.5969 95.4695 39.6594C94.4005 40.7219 93.8 42.1629 93.8 43.6655V54.9964C92.2883 54.9964 90.8384 55.5933 89.7695 56.6558C88.7005 57.7183 88.1 59.1593 88.1 60.6619V72.752C87.2335 73.2492 86.514 73.9644 86.0137 74.8256C85.5134 75.6869 85.25 76.6638 85.25 77.6583V95.4138C84.3835 95.9111 83.664 96.6263 83.1637 97.4875C82.6634 98.3487 82.4 99.3257 82.4 100.32V117.317C80.8883 117.317 79.4385 117.913 78.3695 118.976C77.3005 120.038 76.7 121.479 76.7 122.982V151.309C73.5954 151.309 71 153.889 71 156.975C71 160.061 71 164 71 164H128C128 164 128 160.061 128 156.975C128 153.889 125.405 151.309 122.3 151.309V128.647C122.3 127.145 121.699 125.704 120.631 124.641C119.562 123.579 118.112 122.982 116.6 122.982V105.986C116.6 104.991 116.337 104.014 115.836 103.153C115.336 102.292 114.616 101.577 113.75 101.079V83.3237C113.75 82.3293 113.487 81.3523 112.986 80.4911C112.486 79.6299 111.766 78.9147 110.9 78.4174V60.6619C110.9 59.1593 110.299 57.7183 109.231 56.6558C108.162 55.5933 106.712 54.9964 105.2 54.9964V43.6655Z" fill="black" fill-opacity="0.7"/>
      </g>
      <defs>
      <clipPath id="clip0_1_312">
      <rect y="0.5" width="40" height="40" rx="100" fill="white"/>
      </clipPath>
      </defs>
      </svg>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [40, 40],
    });

export const ViewPointIcon = L.divIcon({
html: `
<svg
width="200" height="201" viewBox="0 0 200 201" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.5" width="40" height="40" rx="100" fill="#A478B9"/>
    <path d="M100 116C108.837 116 116 109.06 116 100.5C116 91.9396 108.837 85 100 85C91.1634 85 84 91.9396 84 100.5C84 109.06 91.1634 116 100 116Z" fill="black" fill-opacity="0.7"/>
    <path d="M85.3 51L76.333 60.8889H60.8C55.41 60.8889 51 65.3389 51 70.7778V130.111C51 135.55 55.41 140 60.8 140H139.2C144.59 140 149 135.55 149 130.111V70.7778C149 65.3389 144.59 60.8889 139.2 60.8889H123.667L114.7 51H85.3ZM100 125.167C86.476 125.167 75.5 114.091 75.5 100.444C75.5 86.7978 86.476 75.7222 100 75.7222C113.524 75.7222 124.5 86.7978 124.5 100.444C124.5 114.091 113.524 125.167 100 125.167Z" fill="black" fill-opacity="0.7"/>
    </svg>`,
className: "",
iconSize: [40, 40],
iconAnchor: [40, 40],
});

export const EntertainIcon = L.divIcon({
    html: `
    <svg
    width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="100" fill="#62B944"/>
      <path d="M99.9798 136.909C104.54 136.909 108.411 139.756 109.896 143.711C112.813 143.078 115.623 142.182 118.327 140.969L108.995 119.087C106.237 120.405 103.215 121.091 99.9798 121.091C96.7452 121.091 93.7226 120.405 90.9651 119.087L81.6323 140.969C84.3367 142.182 87.1471 143.078 90.0637 143.711C91.5484 139.756 95.4195 136.909 99.9798 136.909ZM133.122 130.371C131.796 128.578 130.789 126.364 130.789 123.727C130.789 117.98 135.561 113.182 141.394 113.182L143.038 113.34C144.364 109.122 145.053 104.64 145.053 100C145.053 95.36 144.364 90.8782 143.038 86.8182H141.394C135.508 86.8182 130.789 82.1255 130.789 76.2727C130.789 73.6364 131.637 71.4745 133.122 69.6291C126.926 62.935 118.823 58.2809 109.896 56.2891C108.411 60.2436 104.54 63.0909 99.9798 63.0909C95.4195 63.0909 91.5484 60.2436 90.0637 56.2891C81.1364 58.2809 73.0332 62.935 66.8375 69.6291C68.3223 71.4745 69.2238 73.7945 69.2238 76.2727C69.2238 79.0696 68.1064 81.7518 66.1175 83.7295C64.1286 85.7071 61.431 86.8182 58.6182 86.8182H56.9214C55.5957 90.9309 54.9063 95.36 54.9063 100C54.9063 104.693 55.6487 109.175 56.9744 113.445L58.6182 113.182C64.5043 113.182 69.2238 118.033 69.2238 123.727C69.2238 126.364 68.3753 128.631 66.8906 130.424C68.5875 132.269 70.4964 133.956 72.4585 135.485L82.5337 111.969C80.1475 108.542 78.7688 104.429 78.7688 100C78.7688 94.4063 81.0035 89.0418 84.9813 85.0865C88.9592 81.1312 94.3543 78.9091 99.9798 78.9091C105.605 78.9091 111 81.1312 114.978 85.0865C118.956 89.0418 121.191 94.4063 121.191 100C121.191 104.429 119.812 108.542 117.426 111.969L127.501 135.485C129.516 133.956 131.372 132.216 133.122 130.371ZM99.9798 158C94.6771 158 90.2227 154.098 89.3743 148.984C86.0041 148.265 82.7169 147.205 79.5642 145.82L74.3675 158H62.8605L70.3374 140.495C67.5185 138.49 64.9388 136.173 62.6483 133.587C61.3757 134.115 60.05 134.273 58.6182 134.273C55.8055 134.273 53.1079 133.162 51.119 131.184C49.1301 129.206 48.0127 126.524 48.0127 123.727C48.0127 120.458 49.6035 117.505 52.0958 115.555C48.789 105.502 48.7705 94.6669 52.0428 84.6036C50.3102 83.2425 49.0466 81.379 48.4271 79.2715C47.8077 77.1641 47.8632 74.9172 48.5859 72.8426C49.3086 70.7679 50.6627 68.9683 52.4603 67.6933C54.258 66.4183 56.4101 65.7312 58.6182 65.7273C59.997 65.7273 61.3227 66.0436 62.4893 66.5182C69.5598 58.6332 78.9798 53.2017 89.3743 51.0164C90.2227 45.9018 94.6771 42 99.9798 42C105.283 42 109.737 45.9018 110.585 51.0164C121.191 53.2309 130.418 58.7673 137.417 66.4655C138.637 65.9909 139.963 65.7273 141.394 65.7273C144.207 65.7273 146.905 66.8383 148.894 68.816C150.883 70.7936 152 73.4759 152 76.2727C151.994 77.8699 151.624 79.445 150.917 80.879C150.209 82.3131 149.184 83.5686 147.917 84.5509C149.508 89.4545 150.356 94.7273 150.356 100C150.356 105.273 149.508 110.545 147.917 115.449C150.356 117.4 152 120.405 152 123.727C152 129.633 147.281 134.273 141.394 134.273C139.963 134.273 138.637 134.062 137.364 133.535C135.031 136.118 132.433 138.438 129.622 140.495L137.099 158H125.592L120.396 145.82C117.214 147.191 113.926 148.298 110.585 148.984C109.737 154.098 105.283 158 99.9798 158Z" fill="black" fill-opacity="0.7"/>
      </svg>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [40, 40],
    });
  
  export const SportsIcon = L.divIcon({
    html: `
    <svg
    width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="100" fill="#B9B678"/>
      <path d="M49 100C49 86.474 54.3732 73.5019 63.9376 63.9376C73.5019 54.3732 86.474 49 100 49C113.526 49 126.498 54.3732 136.062 63.9376C145.627 73.5019 151 86.474 151 100C151 113.526 145.627 126.498 136.062 136.062C126.498 145.627 113.526 151 100 151C86.474 151 73.5019 145.627 63.9376 136.062C54.3732 126.498 49 113.526 49 100ZM81.5066 61.0046C75.7826 63.7267 70.7257 67.672 66.6931 72.562L71.7695 89.0703L79.6628 91.6988L96.0769 79.2234V70.7182L81.5066 61.0046ZM57.1286 104.974C57.9132 111.761 60.2671 118.078 63.8214 123.531H78.7605L83.7428 118.548L77.2854 99.1683L69.2509 96.4928L57.1286 104.974ZM91.2594 142.259C97.026 143.446 102.974 143.446 108.741 142.259L114.939 128.325L110.145 123.538H89.8549L85.0688 128.325L91.2594 142.267V142.259ZM136.171 123.538C139.623 118.25 141.946 112.162 142.793 105.61L130.678 96.5242L122.715 99.1762L116.257 118.556L121.24 123.538H136.171ZM133.205 72.4365C129.189 67.6009 124.169 63.6973 118.493 60.9968L103.923 70.7182V79.2234L120.337 91.6988L128.215 89.0782L133.205 72.4365Z" fill="black" fill-opacity="0.7"/>
      </svg>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [40, 40],
    });
  export const plus18Icon = L.divIcon({
    html: `
    <svg
    width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="100" fill="#B94444"/>
      <g opacity="0.7">
      <path d="M43 90.0191C56.5654 82.9027 68.9098 75.8949 81.7992 70.0481C84.9251 68.6298 90.3816 70.0783 93.8056 71.9273C98.123 74.2595 101.265 75.4161 105.483 71.9956C110.505 67.924 115.761 68.2416 121.571 71.5123C132.855 77.8636 144.519 83.5593 157 90.0325C146.539 96.2271 135.656 98.6029 124.616 96.7159C107.671 93.8199 91.0803 94.075 74.1568 96.7629C63.5876 98.4419 53.1117 96.2081 43 90.0202V90.0191Z" fill="black"/>
      <path d="M43.7966 94.2047C81.5557 110.158 118.168 110.175 154.832 94.6443C150.7 110.587 125.472 129.695 106.193 131.718C81.9608 134.262 56.5745 119.411 43.7966 94.2047Z" fill="black"/>
      </g>
      </svg>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [40, 40],
    });
  export const CarsIcon = L.divIcon({
    html: `
    <svg
    width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="100" fill="#44ABB9"/>
      <path d="M80.1812 65H119.819C122.794 65 125.441 66.8813 126.425 69.6812L132.134 86H67.8656L73.575 69.6812C74.5594 66.8813 77.2062 65 80.1812 65ZM60.3625 65.0656L52.6625 87.05C47.5875 89.15 44 94.1594 44 100V117.5C44 122.684 46.8219 127.213 51 129.619V142C51 145.872 54.1281 149 58 149H65C68.8719 149 72 145.872 72 142V131.5H128V142C128 145.872 131.128 149 135 149H142C145.872 149 149 145.872 149 142V129.619C153.178 127.191 156 122.684 156 117.5V100C156 94.1594 152.412 89.15 147.338 87.05L139.638 65.0656C136.684 56.6438 128.744 51 119.819 51H80.1812C71.2562 51 63.3156 56.6438 60.3625 65.0656ZM89.5 103.5H110.5C112.425 103.5 114 105.075 114 107V114C114 115.925 112.425 117.5 110.5 117.5H89.5C87.575 117.5 86 115.925 86 114V107C86 105.075 87.575 103.5 89.5 103.5ZM54.5 105.25C54.5 102.341 56.8406 100 59.75 100H66.75C69.6594 100 72 102.341 72 105.25C72 108.159 69.6594 110.5 66.75 110.5H59.75C56.8406 110.5 54.5 108.159 54.5 105.25ZM133.25 100H140.25C143.159 100 145.5 102.341 145.5 105.25C145.5 108.159 143.159 110.5 140.25 110.5H133.25C130.341 110.5 128 108.159 128 105.25C128 102.341 130.341 100 133.25 100Z" fill="black" fill-opacity="0.7"/>
      </svg>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [40, 40],
    });
  export const FuelIcon = L.divIcon({
    html: `
    <svg
    width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="100" fill="#44ABB9"/>
      <path d="M115 136H55C53.35 136 52 137.35 52 139V145C52 146.65 53.35 148 55 148H115C116.65 148 118 146.65 118 145V139C118 137.35 116.65 136 115 136ZM144.475 72.1188L129.288 56.9312C128.125 55.7687 126.213 55.7687 125.05 56.9312L122.931 59.05C121.769 60.2125 121.769 62.125 122.931 63.2875L130 70.3563V82C130 87.2687 133.919 91.6187 139 92.35V122.5C139 124.975 136.975 127 134.5 127C132.025 127 130 124.975 130 122.5V116.5C130 107.388 122.613 100 113.5 100H112V64C112 57.3813 106.619 52 100 52H70C63.3813 52 58 57.3813 58 64V130H112V109H113.5C117.644 109 121 112.356 121 116.5V121.712C121 128.781 126.062 135.213 133.094 135.944C141.156 136.75 148 130.412 148 122.5V80.6125C148 77.425 146.725 74.3688 144.475 72.1188ZM100 88H70V64H100V88Z" fill="black" fill-opacity="0.7"/>
      </svg>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [40, 40],
    });
  
  export const BycicleIcon = L.divIcon({
    html: `
    <svg
    width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="100" fill="#44ABB9"/>
      <path d="M139.382 90.5896C136.539 90.5883 133.719 91.1041 131.059 92.1119L118.7 70.8827H131.516C132.559 70.8827 133.56 71.298 134.297 72.0371C135.035 72.7763 135.449 73.7788 135.449 74.8241C135.449 75.8694 135.863 76.8719 136.601 77.6111C137.339 78.3502 138.339 78.7655 139.382 78.7655C140.425 78.7655 141.425 78.3502 142.163 77.6111C142.9 76.8719 143.315 75.8694 143.315 74.8241C143.315 71.6882 142.072 68.6807 139.859 66.4632C137.646 64.2458 134.645 63 131.516 63H111.852C111.162 63.0016 110.485 63.1848 109.889 63.5314C109.292 63.878 108.797 64.3757 108.453 64.9746C108.109 65.5735 107.928 66.2525 107.928 66.9436C107.928 67.6347 108.11 68.3135 108.455 68.9121L114.182 78.7655H85.9246L77.8868 64.9707C77.5424 64.3728 77.0473 63.8761 76.4511 63.5303C75.855 63.1844 75.1786 63.0016 74.4898 63H60.7248C59.6817 63 58.6814 63.4153 57.9438 64.1544C57.2063 64.8936 56.7919 65.8961 56.7919 66.9414C56.7919 67.9867 57.2063 68.9892 57.9438 69.7283C58.6814 70.4675 59.6817 70.8827 60.7248 70.8827H72.2333L78.9732 82.4654L71.2501 93.0825C65.9438 90.4213 59.8334 89.8552 54.1302 91.4966C48.4271 93.1379 43.5474 96.8669 40.4586 101.944C37.3698 107.021 36.2973 113.077 37.4538 118.909C38.6102 124.742 41.9111 129.926 46.7022 133.434C51.4933 136.942 57.4247 138.518 63.3208 137.85C69.2169 137.181 74.6471 134.317 78.5351 129.825C82.4231 125.333 84.4851 119.541 84.3122 113.597C84.1393 107.653 81.7442 101.991 77.6017 97.7333L83.2994 89.8998L98.6228 116.208C98.8622 116.69 99.1977 117.118 99.6085 117.465C100.019 117.812 100.497 118.071 101.011 118.226C101.526 118.381 102.066 118.429 102.6 118.367C103.134 118.304 103.649 118.133 104.114 117.863C104.579 117.593 104.984 117.231 105.303 116.798C105.623 116.366 105.851 115.872 105.973 115.348C106.095 114.823 106.109 114.279 106.013 113.75C105.918 113.22 105.715 112.715 105.417 112.267L90.5113 86.6482H118.769L124.27 96.0927C120.011 99.66 117.143 104.618 116.171 110.094C115.198 115.571 116.183 121.216 118.952 126.037C121.722 130.857 126.098 134.546 131.312 136.453C136.527 138.36 142.245 138.364 147.462 136.464C152.679 134.564 157.06 130.882 159.836 126.066C162.613 121.249 163.606 115.605 162.641 110.127C161.676 104.649 158.815 99.6875 154.561 96.1142C150.307 92.5408 144.933 90.5847 139.382 90.5896ZM76.4562 114.238C76.4571 117.61 75.3792 120.893 73.3806 123.606C71.3821 126.319 68.5682 128.318 65.3523 129.31C62.1364 130.302 58.6878 130.234 55.513 129.117C52.3383 128 49.6046 125.892 47.7133 123.103C45.8221 120.314 44.8731 116.991 45.0055 113.622C45.138 110.252 46.345 107.014 48.4493 104.383C50.5536 101.751 53.4443 99.8656 56.6969 99.0022C59.9496 98.1388 63.3927 98.3434 66.5208 99.5858L57.549 111.903C57.2223 112.319 56.9828 112.797 56.8446 113.308C56.7064 113.819 56.6725 114.353 56.7448 114.878C56.8171 115.403 56.9942 115.907 57.2655 116.362C57.5367 116.816 57.8966 117.211 58.3237 117.523C58.7507 117.835 59.2361 118.058 59.7509 118.178C60.2657 118.298 60.7993 118.312 61.3198 118.221C61.8404 118.129 62.3372 117.934 62.7806 117.645C63.224 117.357 63.6049 116.982 63.9005 116.543L72.8724 104.227C75.1924 107.045 76.4597 110.585 76.4562 114.238ZM139.382 130.003C136.266 130.001 133.221 129.071 130.633 127.332C128.045 125.593 126.031 123.123 124.845 120.236C123.66 117.348 123.357 114.172 123.975 111.112C124.593 108.051 126.104 105.243 128.316 103.044L135.985 116.208C136.224 116.69 136.56 117.118 136.971 117.465C137.381 117.812 137.859 118.071 138.373 118.226C138.888 118.381 139.428 118.429 139.962 118.367C140.496 118.304 141.011 118.133 141.476 117.863C141.941 117.593 142.346 117.231 142.666 116.798C142.985 116.366 143.213 115.872 143.336 115.348C143.458 114.823 143.471 114.279 143.376 113.75C143.28 113.22 143.077 112.715 142.779 112.267L135.105 99.0685C137.269 98.4545 139.539 98.3127 141.762 98.6526C143.986 98.9925 146.11 99.8061 147.993 101.039C149.876 102.271 151.473 103.894 152.677 105.798C153.881 107.701 154.664 109.842 154.973 112.074C155.281 114.307 155.109 116.579 154.467 118.739C153.824 120.899 152.728 122.896 151.25 124.595C149.772 126.295 147.949 127.657 145.901 128.589C143.854 129.522 141.631 130.004 139.382 130.003Z" fill="black" fill-opacity="0.7"/>
      </svg>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [40, 40],
    });
  
  export const ShopIcon = L.divIcon({
    html: `
    <svg
    width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="100" fill="#44ABB9"/>
      <path d="M147.314 93.4242H147.419C149.233 93.4242 150.871 94.1602 152.042 95.3484C153.251 96.5022 154 98.1122 154 99.8946V100.002V100.102C154 101.884 153.251 103.494 152.042 104.644C150.868 105.832 149.229 106.568 147.415 106.568H147.306H146.526L140.514 140.565C140.26 142.093 139.445 143.476 138.224 144.455L138.213 144.463C137.081 145.417 135.599 146 133.98 146H67.012C65.3931 146 63.9108 145.417 62.7717 144.455L62.7795 144.463C61.5625 143.492 60.7472 142.118 60.4857 140.599L60.4818 140.561L54.4704 106.564H53.581C51.767 106.564 50.1286 105.828 48.9583 104.64C48.3378 104.05 47.8447 103.344 47.5082 102.563C47.1717 101.782 46.9989 100.942 47 100.094V99.8869C47 98.1045 47.749 96.4946 48.9583 95.3446C50.1325 94.1563 51.7709 93.4204 53.5849 93.4204H53.6941H53.6902L147.314 93.4242ZM72.3252 134.493C72.7629 134.463 73.1898 134.346 73.5796 134.149C73.9694 133.951 74.3139 133.677 74.5916 133.343L74.5955 133.339C74.8919 133.016 75.117 132.636 75.2566 132.223C75.3963 131.81 75.4474 131.373 75.4069 130.939V130.951L73.7334 109.593C73.7036 109.162 73.5843 108.743 73.383 108.36C73.1817 107.977 72.9027 107.638 72.5631 107.365L72.5592 107.362C72.2302 107.07 71.8433 106.849 71.4231 106.712C71.0028 106.575 70.5582 106.525 70.1172 106.564H70.1289C69.6912 106.594 69.2643 106.711 68.8745 106.909C68.4847 107.106 68.1402 107.381 67.8625 107.714L67.8585 107.718C67.5622 108.041 67.3371 108.422 67.1975 108.835C67.0578 109.247 67.0067 109.684 67.0471 110.118V110.106L68.7207 131.465C68.7763 132.292 69.1601 133.066 69.7895 133.619L69.7934 133.623C70.3957 134.184 71.1945 134.497 72.0248 134.497H72.0677H72.0638L72.3252 134.493ZM93.8001 131.212V109.823C93.8013 109.397 93.7141 108.975 93.5437 108.584C93.3733 108.192 93.1234 107.839 92.8092 107.546C92.5098 107.237 92.1496 106.992 91.7505 106.824C91.3515 106.657 90.922 106.571 90.4881 106.572H90.4257C89.9924 106.571 89.5633 106.656 89.1649 106.824C88.7665 106.991 88.407 107.237 88.1085 107.546C87.7946 107.84 87.5449 108.194 87.3745 108.586C87.2042 108.978 87.1168 109.4 87.1177 109.826V131.246C87.1177 132.143 87.4961 132.952 88.1085 133.523C88.408 133.831 88.7682 134.077 89.1672 134.244C89.5663 134.412 89.9958 134.498 90.4296 134.497H90.492C90.9254 134.498 91.3544 134.412 91.7529 134.245C92.1513 134.077 92.5108 133.832 92.8092 133.523C93.1274 133.229 93.3809 132.874 93.554 132.479C93.7271 132.085 93.8161 131.66 93.8157 131.231V131.208L93.8001 131.212ZM113.863 131.212V109.823C113.864 109.397 113.777 108.975 113.606 108.584C113.436 108.192 113.186 107.839 112.872 107.546C112.572 107.237 112.212 106.992 111.813 106.824C111.414 106.657 110.985 106.571 110.551 106.572H110.488C110.055 106.571 109.626 106.656 109.228 106.824C108.829 106.991 108.47 107.237 108.171 107.546C107.857 107.84 107.608 108.194 107.437 108.586C107.267 108.978 107.18 109.4 107.18 109.826V131.246C107.18 132.143 107.559 132.952 108.171 133.523C108.471 133.831 108.831 134.077 109.23 134.244C109.629 134.412 110.059 134.498 110.492 134.497H110.555C110.988 134.498 111.417 134.412 111.816 134.245C112.214 134.077 112.574 133.832 112.872 133.523C113.19 133.229 113.444 132.874 113.617 132.479C113.79 132.085 113.879 131.66 113.878 131.231V131.208L113.863 131.212ZM132.252 131.465L133.926 110.106C133.963 109.674 133.911 109.239 133.771 108.828C133.632 108.417 133.408 108.038 133.114 107.714L133.118 107.718C132.841 107.384 132.497 107.109 132.108 106.91C131.719 106.711 131.293 106.592 130.855 106.56H130.844C130.404 106.523 129.961 106.575 129.543 106.712C129.124 106.849 128.739 107.069 128.41 107.358L128.413 107.354C128.073 107.626 127.794 107.964 127.591 108.346C127.388 108.728 127.267 109.147 127.235 109.577V109.589L125.562 130.947C125.524 131.379 125.577 131.814 125.716 132.225C125.856 132.637 126.079 133.016 126.373 133.339L126.369 133.335C126.646 133.669 126.99 133.944 127.379 134.143C127.768 134.342 128.194 134.461 128.632 134.493H128.944C129.775 134.493 130.575 134.18 131.179 133.619C131.817 133.067 132.208 132.29 132.268 131.457V131.445L132.252 131.465ZM71.8727 68.9839L67.0159 90.1353H60.119L65.3931 67.4966C66.029 64.4876 67.6947 61.9385 70.0041 60.1561L70.0314 60.1369C72.3555 58.285 75.2586 57.2777 78.2508 57.285H78.399H78.3912H87.1138V57.2544C87.1138 56.3574 87.4922 55.5486 88.1046 54.9775C88.4044 54.668 88.7651 54.4217 89.1648 54.2537C89.5645 54.0857 89.9949 53.9993 90.4296 54H110.566C111.479 54 112.302 54.3718 112.884 54.9736C113.198 55.2679 113.447 55.6218 113.618 56.0139C113.788 56.406 113.875 56.828 113.875 57.2544V57.285H122.741C125.866 57.285 128.733 58.3583 130.98 60.1522L130.957 60.1331C133.323 61.9478 134.961 64.5261 135.58 67.4123L135.595 67.4928L140.869 90.1315H133.972L129.116 68.98C128.763 67.5285 127.932 66.2322 126.752 65.2925L126.74 65.281C125.592 64.3493 124.149 63.8409 122.66 63.8436H113.863V63.8743C113.864 64.3001 113.777 64.7216 113.606 65.1132C113.436 65.5047 113.186 65.8579 112.872 66.1512C112.572 66.4596 112.212 66.705 111.813 66.8724C111.414 67.0398 110.985 67.1257 110.551 67.1248H90.4296C89.9963 67.126 89.5672 67.0403 89.1688 66.8729C88.7704 66.7055 88.4109 66.4599 88.1124 66.1512C87.7985 65.8569 87.5488 65.503 87.3784 65.1109C87.2081 64.7188 87.1207 64.2967 87.1216 63.8704V63.8398H78.3249C76.8323 63.8381 75.3861 64.3493 74.2367 65.2849L74.2484 65.2772C73.077 66.2094 72.2504 67.4944 71.8961 68.934L71.8883 68.98L71.8727 68.9839Z" fill="black" fill-opacity="0.7"/>
      </svg>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [40, 40],
    });
  
  export const FoodIcon = L.divIcon({
    html: `
    <svg
    width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="100" fill="#44B9B2"/>
      <path d="M140 105V140C140 142.652 138.946 145.196 137.071 147.071C135.196 148.946 132.652 150 130 150C127.348 150 124.804 148.946 122.929 147.071C121.054 145.196 120 142.652 120 140V115H110V65C110 61.0218 111.58 57.2064 114.393 54.3934C117.206 51.5804 121.022 50 125 50H140V105ZM70 100C67.3478 100 64.8043 98.9464 62.9289 97.0711C61.0536 95.1957 60 92.6522 60 90V55C60 53.6739 60.5268 52.4021 61.4645 51.4645C62.4021 50.5268 63.6739 50 65 50C66.3261 50 67.5979 50.5268 68.5355 51.4645C69.4732 52.4021 70 53.6739 70 55V75H75V55C75 53.6739 75.5268 52.4021 76.4645 51.4645C77.4021 50.5268 78.6739 50 80 50C81.3261 50 82.5979 50.5268 83.5355 51.4645C84.4732 52.4021 85 53.6739 85 55V75H90V55C90 53.6739 90.5268 52.4021 91.4645 51.4645C92.4021 50.5268 93.6739 50 95 50C96.3261 50 97.5979 50.5268 98.5355 51.4645C99.4732 52.4021 100 53.6739 100 55V90C100 92.6522 98.9464 95.1957 97.0711 97.0711C95.1957 98.9464 92.6522 100 90 100V140C90 142.652 88.9464 145.196 87.0711 147.071C85.1957 148.946 82.6522 150 80 150C77.3478 150 74.8043 148.946 72.9289 147.071C71.0536 145.196 70 142.652 70 140V100Z" fill="black" fill-opacity="0.7"/>
      </svg>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [40, 40],
    });
  
  export const CafeIcon = L.divIcon({
    html: `
    <svg
    width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="100" fill="#B97C44"/>
      <path d="M137.526 65.3158H132.368V60.1579C132.368 58.7899 131.825 57.478 130.858 56.5107C129.89 55.5434 128.578 55 127.211 55H65.3158C63.9478 55 62.6359 55.5434 61.6686 56.5107C60.7013 57.478 60.1579 58.7899 60.1579 60.1579V106.579C60.1579 112.051 62.3316 117.299 66.2007 121.168C70.0699 125.037 75.3176 127.211 80.7895 127.211H111.737C121.32 127.211 129.33 120.614 131.636 111.737H137.526C141.63 111.737 145.566 110.107 148.468 107.205C151.37 104.303 153 100.367 153 96.2632V80.7895C153 76.6856 151.37 72.7498 148.468 69.8479C145.566 66.946 141.63 65.3158 137.526 65.3158ZM142.684 96.2632C142.684 97.6311 142.141 98.943 141.174 99.9103C140.206 100.878 138.894 101.421 137.526 101.421H132.368V75.6316H137.526C138.894 75.6316 140.206 76.175 141.174 77.1423C142.141 78.1096 142.684 79.4215 142.684 80.7895V96.2632ZM132.368 137.526H55C55 146.057 61.9425 153 70.4737 153H127.211C135.742 153 142.684 146.057 142.684 137.526H132.368Z" fill="black" fill-opacity="0.7"/>
      </svg>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [40, 40],
    });
  
  export const BankIcon = L.divIcon({
    html: `
    <svg
    width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="100" fill="#44B97A"/>
      <path d="M145 60.0001C153.837 60.0002 161 67.1636 161 76.0001V124C161 132.837 153.837 140 145 140H55C46.1635 140 39 132.837 39 124L39.0001 76C39.0001 67.1634 46.1635 60 55.0001 60L145 60.0001ZM83.2341 109.804V119.608H95.2097V129.412H104.79V119.608H109.58C112.757 119.608 115.803 118.317 118.048 116.018C120.294 113.72 121.556 110.603 121.556 107.353C121.556 104.103 120.294 100.986 118.048 98.6875C115.803 96.3892 112.757 95.0981 109.58 95.0981H90.4195C89.7842 95.0981 89.175 94.8399 88.7259 94.3802C88.2767 93.9206 88.0244 93.2971 88.0244 92.6471C88.0244 91.9971 88.2767 91.3736 88.7259 90.914C89.175 90.4544 89.7842 90.1961 90.4195 90.1961H116.766V80.3922H104.79V70.5883H95.2097V80.3922H90.4195C87.2433 80.3922 84.1973 81.6834 81.9515 83.9816C79.7056 86.2798 78.4439 89.3969 78.4439 92.6471C78.4439 95.8973 79.7056 99.0144 81.9515 101.313C84.1973 103.611 87.2433 104.902 90.4195 104.902H109.58C110.216 104.902 110.825 105.16 111.274 105.62C111.723 106.08 111.976 106.703 111.976 107.353C111.976 108.003 111.723 108.626 111.274 109.086C110.825 109.546 110.216 109.804 109.58 109.804H83.2341Z" fill="black" fill-opacity="0.7"/>
      </svg>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [40, 40],
    });
  export const SteepPlaceIcon = L.divIcon({
    html: `
    <svg
    width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="100" fill="#7882B9"/>
      <path d="M73.9 100C81.8949 100 88.4 93.4576 88.4 85.4167C88.4 77.3758 81.8949 70.8333 73.9 70.8333C65.9051 70.8333 59.4 77.3758 59.4 85.4167C59.4 93.4576 65.9051 100 73.9 100ZM137.7 76.6667H97.1C95.4978 76.6667 94.2 77.9719 94.2 79.5833V105.833H53.6V67.9167C53.6 66.3052 52.3022 65 50.7 65H44.9C43.2977 65 42 66.3052 42 67.9167V132.083C42 133.695 43.2977 135 44.9 135H50.7C52.3022 135 53.6 133.695 53.6 132.083V123.333H146.4V132.083C146.4 133.695 147.698 135 149.3 135H155.1C156.702 135 158 133.695 158 132.083V97.0833C158 85.8068 148.912 76.6667 137.7 76.6667Z" fill="black" fill-opacity="0.7"/>
      </svg>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [40, 40],
    });