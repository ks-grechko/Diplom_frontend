import "../../vendor/glide/css/glide.core.css";
import "../../vendor/glide/css/glide.core.min.css";
import "../../vendor/glide/css/glide.theme.css";
import "../../vendor/glide/css/glide.theme.min.css";
import Glide from "@glidejs/glide";

const slider = new Glide(".glide", {
    type: "slider",
    focusAt: "0",
    perView: 3,
    peek: { before: 88, after: 88 },
    gap: 16,
    breakpoints: {
      768: {
        peek: { before: 40, after: 40 },
        perView: 2,
        gap: 8,
      },
      425: {
        perView: 1,
        peek: { before: 0, after: 0 },
      },
    },
  });
  
  export { slider };