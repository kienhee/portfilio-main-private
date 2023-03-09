/** @format */

import styles from "./hero.module.scss";
import Typewriter from "typewriter-effect";
import { Row, Col } from "react-bootstrap";
import heroImage from "../../assets/images/hero.jpg"
const Hero = () => {
  return (
    <section className={`${styles["hero"]} wrap-app`}>
      <Row className="align-items-center">
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className={`${styles["hero-introduce"]} mb-5`}>
          <small className={`${styles["hero-say-hello"]} mb-3 d-block`}>✋ Hello, my name is</small>
          <h3 className="mb-3 fs-3 fw-bolder">Tran Trung Kien.</h3>
          <div className="h1 mb-3 fs-1 fw-bolder text-main">
            <Typewriter
              options={{
                strings: ["A Fullstack Deverloper"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <small className="fw-bold d-block mb-3 text-uppercase">
            I enjoy the challenge of finding creative solutions to complex problems and seeing the fruits of my labor
            come to life. I am always eager to learn new technologies and programming languages, and I am dedicated to
            staying up-to-date with industry advancements. I believe that my love for programming and my drive to
            continuously improve make me an asset to any team or project."
          </small>

          <button className="btn btn-main">
            <a href="#contact" className="text-white">Get in touch</a>
          </button>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="  position-relative mb-5">
          <img className={`${styles["hero-img"]} w-100`} id="hero-img" src={heroImage} alt="Tran Trung Kien" />
          <svg
            className={`${styles["hero-img-sub"]}`}
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_289)">
              <path
                d="M46.3032 90.5973C45.7214 90.5464 45.1963 90.6048 44.7279 90.7725C44.2595 90.9403 43.8833 91.2005 43.5995 91.553C43.3156 91.9056 43.1528 92.321 43.1109 92.7991C43.0466 93.5323 43.2511 94.0863 43.7242 94.461C44.1973 94.8357 44.846 95.1315 45.6702 95.3482C46.1885 95.482 46.595 95.6079 46.8899 95.7261C47.1847 95.8443 47.4199 96.0014 47.5954 96.1975C47.771 96.3935 47.8448 96.651 47.8169 96.9697C47.7785 97.4081 47.5852 97.7344 47.2372 97.9489C46.8892 98.1633 46.4362 98.2461 45.8783 98.1973C45.3205 98.1484 44.8672 97.9601 44.5185 97.6324C44.1697 97.3047 43.9848 96.895 43.9636 96.4033L42.9355 96.3133C42.9234 96.8181 43.0319 97.2753 43.2611 97.6849C43.4902 98.0945 43.8225 98.4267 44.2579 98.6817C44.6933 98.9367 45.2059 99.09 45.7956 99.1416C46.3535 99.1905 46.8583 99.1343 47.3101 98.9732C47.7619 98.812 48.1232 98.5605 48.3941 98.2189C48.6649 97.8772 48.8209 97.4713 48.8621 97.0011C48.9263 96.2679 48.7257 95.7163 48.2602 95.3462C47.7948 94.9762 47.1499 94.6828 46.3257 94.4661C45.8074 94.3323 45.3988 94.2062 45.1 94.0876C44.8012 93.9691 44.5626 93.8057 44.3841 93.5973C44.2056 93.3889 44.1306 93.1214 44.1593 92.7946C44.1984 92.3483 44.4062 92.0152 44.7829 91.7952C45.1595 91.5753 45.6347 91.4904 46.2085 91.5407C46.8461 91.5965 47.3572 91.812 47.742 92.187C48.1267 92.562 48.3142 93.0341 48.3045 93.6034L49.3326 93.6935C49.3568 93.1415 49.2541 92.6406 49.0245 92.1909C48.7949 91.7411 48.4473 91.3774 47.9818 91.0997C47.5162 90.822 46.9567 90.6546 46.3032 90.5973ZM38.5195 89.0457C37.6201 88.7865 36.8028 88.8132 36.0675 89.1259C35.3322 89.4385 34.7669 89.9916 34.3717 90.7852L35.3749 91.0743C35.6926 90.5497 36.1038 90.1916 36.6086 89.9999C37.1134 89.8082 37.6772 89.802 38.2999 89.9814C38.8533 90.1409 39.3027 90.4161 39.648 90.807C39.9932 91.1979 40.2095 91.6682 40.2967 92.2178C40.3839 92.7674 40.3389 93.3497 40.1617 93.9647C39.9823 94.5874 39.71 95.1063 39.3448 95.5214C38.9795 95.9365 38.5468 96.2176 38.0464 96.3649C37.5461 96.5121 37.0192 96.5059 36.4657 96.3465C35.8508 96.1693 35.3754 95.8616 35.0395 95.4235C34.7037 94.9854 34.5436 94.4647 34.5593 93.8614L33.5561 93.5723C33.4684 94.4546 33.6565 95.2248 34.1204 95.8829C34.5843 96.5411 35.2621 96.9987 36.1538 97.2556C36.9225 97.4771 37.6483 97.501 38.3311 97.3273C39.0139 97.1536 39.6026 96.8008 40.0972 96.2689C40.5918 95.7371 40.9554 95.0676 41.188 94.2604C41.4228 93.4456 41.4717 92.6833 41.3349 91.9737C41.198 91.2641 40.8868 90.654 40.4011 90.1436C39.9155 89.6332 39.2883 89.2672 38.5195 89.0457ZM33.0102 87.1617L31.5345 90.0326L29.6241 89.0506L29.5523 85.3842L28.5064 84.8466L28.613 88.7603C28.0597 88.6468 27.5411 88.7063 27.0573 88.9388C26.5735 89.1714 26.1981 89.5473 25.9311 90.0667C25.6934 90.5292 25.589 90.986 25.618 91.4372C25.6469 91.8883 25.8015 92.3051 26.0817 92.6875C26.3618 93.0698 26.7474 93.3872 27.2383 93.6396L30.0986 95.1098L33.9388 87.639L33.0102 87.1617ZM29.2386 89.9319L31.0957 90.8864L29.609 93.7787L27.7413 92.8187C27.2574 92.57 26.9373 92.239 26.7809 91.8258C26.6245 91.4126 26.6579 90.989 26.881 90.555C27.1077 90.1138 27.4346 89.8366 27.8617 89.7233C28.2887 89.61 28.7477 89.6795 29.2386 89.9319ZM24.6624 81.7929C24.0559 81.3089 23.4002 81.0212 22.6954 80.9296C21.9906 80.8381 21.3033 80.9396 20.6334 81.234C19.9634 81.5285 19.374 81.9947 18.8651 82.6325C18.3562 83.2704 18.0325 83.9486 17.8942 84.6672C17.7558 85.3858 17.8095 86.0785 18.0552 86.7453C18.301 87.4122 18.7271 87.9876 19.3337 88.4716C19.9403 88.9555 20.596 89.2433 21.3008 89.3348C22.0056 89.4264 22.6929 89.3249 23.3628 89.0304C24.0327 88.736 24.6221 88.2698 25.1311 87.6319C25.64 86.9941 25.9636 86.3159 26.102 85.5973C26.2404 84.8787 26.1867 84.186 25.9409 83.5191C25.6952 82.8523 25.269 82.2769 24.6624 81.7929ZM24.0637 82.5433C24.514 82.9025 24.8241 83.3316 24.994 83.8305C25.1639 84.3294 25.1899 84.8517 25.0719 85.3972C24.954 85.9427 24.6954 86.4656 24.2962 86.9659C23.8971 87.4661 23.4446 87.8343 22.939 88.0705C22.4333 88.3067 21.9183 88.3973 21.3941 88.3424C20.8699 88.2875 20.3827 88.0804 19.9325 87.7212C19.4822 87.3619 19.1721 86.9328 19.0022 86.4339C18.8322 85.935 18.8063 85.4128 18.9242 84.8673C19.0422 84.3218 19.3008 83.7989 19.6999 83.2986C20.0991 82.7983 20.5515 82.4301 21.0572 82.194C21.5629 81.9578 22.0779 81.8672 22.602 81.9221C23.1262 81.977 23.6135 82.1841 24.0637 82.5433ZM17.3757 74.7546L16.6511 75.3843L19.1621 78.2737L13.5463 83.1539L14.2311 83.9419L20.5715 78.432L17.3757 74.7546ZM14.1082 69.7407L13.3001 70.2589L15.3664 73.4813L9.10338 77.4973L9.66692 78.3762L16.738 73.8419L14.1082 69.7407ZM11.227 62.8331L4.1965 65.2673L3.30528 62.6932L2.39812 63.0073L4.52213 69.142L5.4293 68.8279L4.53807 66.2538L11.5686 63.8197L11.227 62.8331ZM9.69826 55.5009C9.59311 54.732 9.31705 54.0713 8.87006 53.5188C8.42307 52.9663 7.85553 52.5655 7.16744 52.3164C6.47935 52.0673 5.73106 51.9981 4.92259 52.1087C4.11411 52.2192 3.4119 52.4868 2.81594 52.9115C2.21999 53.3362 1.7809 53.8746 1.49867 54.5269C1.21645 55.1791 1.12791 55.8897 1.23305 56.6585C1.3382 57.4274 1.61426 58.0881 2.06125 58.6406C2.50824 59.1931 3.07578 59.5939 3.76387 59.843C4.45196 60.092 5.20025 60.1613 6.00872 60.0507C6.8172 59.9402 7.51941 59.6726 8.11537 59.2479C8.71132 58.8232 9.15041 58.2848 9.43264 57.6325C9.71486 56.9803 9.8034 56.2697 9.69826 55.5009ZM8.74711 55.6309C8.82516 56.2016 8.75357 56.7262 8.53235 57.2045C8.31113 57.6829 7.96963 58.0789 7.50784 58.3923C7.04605 58.7058 6.49811 58.9059 5.86401 58.9926C5.22991 59.0793 4.64837 59.0337 4.11938 58.8557C3.59039 58.6777 3.15512 58.3881 2.81358 57.9866C2.47204 57.5852 2.26224 57.0991 2.1842 56.5285C2.10615 55.9578 2.17774 55.4332 2.39896 54.9548C2.62018 54.4765 2.96169 54.0805 3.42347 53.7671C3.88526 53.4536 4.4332 53.2535 5.0673 53.1668C5.7014 53.0801 6.28294 53.1257 6.81193 53.3037C7.34093 53.4817 7.77619 53.7713 8.11773 54.1728C8.45927 54.5742 8.66907 55.0602 8.74711 55.6309ZM9.86346 41.6472L8.91146 41.5235L8.33623 45.9503L5.52784 45.5854L5.99019 42.0273L5.0382 41.9036L4.57585 45.4617L1.91026 45.1153L2.46538 40.8432L1.51339 40.7195L0.82373 46.0269L9.1537 47.1093L9.86346 41.6472ZM10.3531 39.8894L7.75239 36.6423L11.7409 35.4828L12.1121 34.3038L7.15664 35.7375L4.04597 31.9524L3.70714 33.0283L6.17521 36.0575L2.42394 37.103L2.05628 38.2705L6.77456 36.9508L10.0143 40.9653L10.3531 39.8894ZM13.085 32.3328L10.2313 30.824L11.2521 28.8933C11.5101 28.4053 11.6435 27.9261 11.6524 27.4557C11.6613 26.9853 11.5467 26.5559 11.3086 26.1676C11.0705 25.7793 10.7216 25.4636 10.2618 25.2206C9.80214 24.9775 9.3475 24.8661 8.89792 24.8863C8.44835 24.9066 8.03076 25.0545 7.64517 25.3303C7.25957 25.606 6.93778 25.9879 6.67977 26.4759L5.17103 29.3296L12.597 33.2557L13.085 32.3328ZM10.3585 28.5294L9.3826 30.3753L6.50767 28.8554L7.4892 26.9989C7.7472 26.5109 8.08099 26.1919 8.49057 26.0419C8.90015 25.892 9.32418 25.9329 9.76267 26.1647C10.2012 26.3966 10.4746 26.7266 10.583 27.155C10.6913 27.5833 10.6165 28.0414 10.3585 28.5294ZM18.9618 23.1528L18.1952 22.5749L15.8909 25.6316L9.9499 21.153L9.32145 21.9867L16.029 27.0432L18.9618 23.1528ZM22.5095 19.92C23.0811 19.3952 23.4663 18.7916 23.6652 18.1093C23.8642 17.427 23.8697 16.7322 23.6818 16.025C23.494 15.3177 23.1241 14.6636 22.5722 14.0626C22.0202 13.4615 21.3999 13.0373 20.7112 12.79C20.0225 12.5427 19.3297 12.4891 18.633 12.6293C17.9363 12.7695 17.3021 13.102 16.7306 13.6269C16.159 14.1517 15.7737 14.7553 15.5748 15.4376C15.3759 16.1199 15.3704 16.8147 15.5582 17.5219C15.7461 18.2292 16.116 18.8833 16.6679 19.4844C17.2198 20.0854 17.8401 20.5096 18.5289 20.7569C19.2176 21.0042 19.9103 21.0578 20.607 20.9176C21.3038 20.7774 21.9379 20.4449 22.5095 19.92ZM21.8602 19.2129C21.4359 19.6025 20.9642 19.8429 20.4451 19.934C19.926 20.0251 19.406 19.9704 18.8851 19.7699C18.3643 19.5694 17.8874 19.2334 17.4545 18.762C17.0217 18.2906 16.7275 17.7869 16.5719 17.2509C16.4164 16.7148 16.4061 16.1921 16.5411 15.6826C16.676 15.1731 16.9556 14.7236 17.3799 14.334C17.8041 13.9444 18.2758 13.704 18.7949 13.6129C19.3141 13.5218 19.8341 13.5765 20.3549 13.777C20.8758 13.9776 21.3526 14.3135 21.7855 14.7849C22.2184 15.2563 22.5126 15.76 22.6681 16.296C22.8236 16.8321 22.8339 17.3548 22.699 17.8643C22.564 18.3738 22.2844 18.8233 21.8602 19.2129ZM27.3627 15.8597L25.6909 13.0983L27.5284 11.9859L30.6887 13.846L31.6946 13.237L28.3055 11.2769C28.6922 10.8651 28.9132 10.3923 28.9687 9.85832C29.0242 9.3244 28.9007 8.80764 28.5983 8.30807C28.329 7.86324 27.9946 7.53495 27.5952 7.3232C27.1958 7.11145 26.7598 7.02469 26.2873 7.06294C25.8148 7.10118 25.3425 7.26324 24.8703 7.54913L22.1192 9.21473L26.4696 16.4004L27.3627 15.8597ZM26.9799 11.1957L25.1937 12.2771L23.5095 9.49525L25.3059 8.40764C25.7712 8.12589 26.2208 8.02669 26.6547 8.11002C27.0886 8.19335 27.4319 8.44375 27.6847 8.8612C27.9416 9.28549 28.0064 9.70918 27.8791 10.1323C27.7518 10.5554 27.4521 10.9098 26.9799 11.1957ZM37.9315 10.7191L37.5815 9.82524L33.4248 11.4529L32.3922 8.81592L35.7331 7.50763L35.3831 6.61372L32.0421 7.92201L31.062 5.41907L35.0734 3.84825L34.7234 2.95434L29.7398 4.90583L32.8027 12.7275L37.9315 10.7191ZM54.4365 9.32855C55.0175 9.38801 55.5434 9.33728 56.0142 9.17637C56.4851 9.01547 56.865 8.76082 57.1539 8.41243C57.4429 8.06403 57.6118 7.65109 57.6607 7.17358C57.7356 6.4414 57.5393 5.88452 57.0717 5.50294C56.6041 5.12136 55.9598 4.81618 55.1388 4.58742C54.6225 4.44612 54.2179 4.31424 53.9248 4.19177C53.6318 4.0693 53.3989 3.90876 53.2262 3.71015C53.0535 3.51154 52.9835 3.25307 53.0161 2.93473C53.0609 2.49701 53.2588 2.17349 53.61 1.96415C53.9611 1.7548 54.4152 1.67864 54.9723 1.73565C55.5294 1.79266 55.9799 1.98753 56.3238 2.32027C56.6677 2.65301 56.8467 3.06537 56.8607 3.55735L57.8873 3.66241C57.9068 3.15777 57.8049 2.69902 57.5818 2.28616C57.3587 1.8733 57.0313 1.53622 56.5997 1.27492C56.168 1.01362 55.6577 0.852838 55.0688 0.792572C54.5117 0.735563 54.0061 0.784346 53.552 0.938921C53.0979 1.0935 52.733 1.33962 52.4572 1.6773C52.1814 2.01498 52.0194 2.41859 51.9714 2.88814C51.8965 3.62031 52.089 4.1748 52.549 4.55158C53.0091 4.92837 53.6496 5.23115 54.4706 5.45992C54.9869 5.60121 55.3935 5.7333 55.6906 5.85617C55.9876 5.97905 56.2238 6.14597 56.3993 6.35692C56.5747 6.56788 56.6457 6.8365 56.6123 7.1628C56.5667 7.60847 56.354 7.93853 55.9742 8.15298C55.5944 8.36743 55.118 8.44534 54.545 8.3867C53.9083 8.32155 53.4004 8.09868 53.0211 7.7181C52.6419 7.33751 52.4613 6.86266 52.4793 6.29354L51.4527 6.18848C51.4204 6.74006 51.5157 7.24237 51.7388 7.69543C51.9618 8.14849 52.3041 8.51725 52.7655 8.8017C53.2269 9.08615 53.784 9.26177 54.4365 9.32855ZM62.1934 10.9908C63.089 11.2629 63.9067 11.2479 64.6464 10.9458C65.3861 10.6438 65.9592 10.0989 66.3658 9.31101L65.3669 9.00757C65.0417 9.52751 64.6254 9.87971 64.1178 10.0642C63.6103 10.2486 63.0465 10.2467 62.4265 10.0583C61.8754 9.89091 61.43 9.6093 61.0904 9.2135C60.7508 8.8177 60.5413 8.34439 60.462 7.79355C60.3826 7.24272 60.436 6.66111 60.622 6.04874C60.8103 5.42872 61.0901 4.91379 61.4612 4.50397C61.8324 4.09415 62.2691 3.81923 62.7715 3.6792C63.2739 3.53918 63.8007 3.55287 64.3518 3.72029C64.9642 3.9063 65.4351 4.22075 65.7646 4.66364C66.0941 5.10653 66.2467 5.62946 66.2224 6.23243L67.2213 6.53587C67.3217 5.65501 67.1446 4.88219 66.6902 4.21742C66.2358 3.55265 65.5647 3.0854 64.6767 2.81568C63.9113 2.58316 63.1859 2.54886 62.5007 2.71277C61.8155 2.87669 61.2218 3.22099 60.7196 3.74569C60.2174 4.27038 59.8443 4.93459 59.6001 5.73833C59.3536 6.54972 59.2937 7.31118 59.4204 8.02271C59.5471 8.73424 59.8495 9.34868 60.3278 9.86603C60.8061 10.3834 61.428 10.7583 62.1934 10.9908ZM67.6755 12.9558L69.1925 10.1064L71.0885 11.1158L71.1075 14.7829L72.1455 15.3355L72.0953 11.4207C72.6469 11.5422 73.1663 11.4902 73.6534 11.2646C74.1406 11.0391 74.5213 10.6686 74.7958 10.1531C75.0402 9.69409 75.1511 9.23883 75.1287 8.78732C75.1062 8.33581 74.9577 7.91686 74.683 7.53047C74.4084 7.14409 74.0274 6.82119 73.5402 6.56179L70.7014 5.05048L66.754 12.4652L67.6755 12.9558ZM71.4867 10.2403L69.6436 9.25903L71.1718 6.38848L73.0255 7.37535C73.5057 7.63099 73.821 7.96652 73.9714 8.38194C74.1218 8.79736 74.0824 9.22045 73.8531 9.65121C73.62 10.089 73.2891 10.3615 72.8605 10.4686C72.4319 10.5758 71.9739 10.4997 71.4867 10.2403ZM75.9387 18.4418C76.5381 18.9346 77.1896 19.2319 77.8929 19.3336C78.5963 19.4354 79.2851 19.344 79.9592 19.0593C80.6333 18.7746 81.2295 18.3171 81.7476 17.6867C82.2658 17.0563 82.5993 16.3829 82.7481 15.6664C82.8969 14.9499 82.8533 14.2565 82.6173 13.5861C82.3813 12.9158 81.9636 12.3342 81.3641 11.8414C80.7646 11.3487 80.1132 11.0514 79.4098 10.9496C78.7065 10.8478 78.0177 10.9393 77.3436 11.224C76.6694 11.5087 76.0733 11.9662 75.5551 12.5966C75.037 13.2269 74.7035 13.9004 74.5547 14.6169C74.4058 15.3334 74.4494 16.0268 74.6855 16.6971C74.9215 17.3675 75.3392 17.9491 75.9387 18.4418ZM76.5483 17.7002C76.1033 17.3344 75.7995 16.9009 75.6368 16.3996C75.4742 15.8982 75.4558 15.3757 75.5817 14.832C75.7076 14.2882 75.9738 13.7692 76.3802 13.2747C76.7866 12.7803 77.2443 12.4187 77.7534 12.19C78.2625 11.9612 78.7787 11.8781 79.302 11.9406C79.8254 12.0032 80.3095 12.2173 80.7545 12.5831C81.1995 12.9488 81.5033 13.3824 81.6659 13.8837C81.8286 14.385 81.847 14.9076 81.721 15.4513C81.5951 15.995 81.329 16.5141 80.9226 17.0085C80.5162 17.5029 80.0584 17.8645 79.5494 18.0933C79.0403 18.3221 78.5241 18.4052 78.0007 18.3427C77.4774 18.2801 76.9932 18.066 76.5483 17.7002ZM83.1346 25.591L83.868 24.9717L81.3983 22.047L87.0827 17.2469L86.4092 16.4492L79.9913 21.8687L83.1346 25.591ZM86.3201 30.6411L87.1355 30.1345L85.1155 26.8828L91.4353 22.9568L90.8844 22.07L83.7492 26.5026L86.3201 30.6411ZM89.105 37.5955L96.1696 35.262L97.0239 37.8486L97.9355 37.5475L95.8994 31.3831L94.9878 31.6841L95.8422 34.2707L88.7776 36.6041L89.105 37.5955ZM90.5265 44.9447C90.6207 45.7149 90.8874 46.3795 91.3265 46.9383C91.7656 47.4971 92.3274 47.9059 93.0119 48.1647C93.6964 48.4235 94.4436 48.5033 95.2536 48.4043C96.0635 48.3052 96.7695 48.0475 97.3714 47.6314C97.9733 47.2152 98.42 46.683 98.7114 46.0348C99.0029 45.3866 99.1015 44.6774 99.0072 43.9072C98.913 43.1369 98.6463 42.4724 98.2072 41.9135C97.7681 41.3547 97.2063 40.9459 96.5218 40.6871C95.8373 40.4283 95.0901 40.3485 94.2802 40.4476C93.4702 40.5467 92.7643 40.8043 92.1623 41.2205C91.5604 41.6366 91.1137 42.1688 90.8223 42.817C90.5308 43.4652 90.4322 44.1744 90.5265 44.9447ZM91.4794 44.8281C91.4094 44.2564 91.4884 43.7329 91.7164 43.2577C91.9444 42.7825 92.2915 42.3914 92.7577 42.0846C93.2239 41.7777 93.7746 41.5854 94.4098 41.5077C95.0451 41.43 95.6259 41.4838 96.1524 41.6693C96.6788 41.8547 97.1099 42.1506 97.4457 42.5568C97.7815 42.963 97.9844 43.452 98.0543 44.0237C98.1243 44.5955 98.0453 45.1189 97.8173 45.5941C97.5893 46.0693 97.2422 46.4604 96.776 46.7673C96.3099 47.0741 95.7591 47.2664 95.1239 47.3442C94.4886 47.4219 93.9078 47.368 93.3814 47.1826C92.8549 46.9971 92.4238 46.7013 92.088 46.295C91.7522 45.8888 91.5493 45.3998 91.4794 44.8281ZM90.1615 58.7967L91.1116 58.9343L91.7512 54.5163L94.554 54.9221L94.0399 58.4731L94.99 58.6107L95.5041 55.0597L98.1643 55.4449L97.547 59.7084L98.4971 59.846L99.264 54.5492L90.9507 53.3456L90.1615 58.7967ZM89.6479 60.5469L92.2019 63.831L88.1973 64.9333L87.8092 66.1068L92.7847 64.7441L95.8408 68.5735L96.195 67.5025L93.7706 64.4383L97.5364 63.4466L97.9208 62.2845L93.1841 63.5365L90.0021 59.476L89.6479 60.5469ZM86.8055 68.0663L89.6372 69.616L88.5887 71.5319C88.3237 72.0161 88.1833 72.4933 88.1677 72.9635C88.152 73.4337 88.2604 73.8647 88.4929 74.2564C88.7254 74.6481 89.0698 74.9688 89.5259 75.2184C89.9821 75.4681 90.4351 75.586 90.8849 75.5723C91.3347 75.5585 91.7544 75.4166 92.1439 75.1464C92.5334 74.8763 92.8607 74.4991 93.1257 74.0148L94.6754 71.1831L87.3067 67.1505L86.8055 68.0663ZM89.4769 71.9085L90.4793 70.0769L93.332 71.6381L92.3239 73.4803C92.0589 73.9645 91.7205 74.2786 91.3088 74.4227C90.8971 74.5667 90.4737 74.5197 90.0386 74.2815C89.6035 74.0434 89.3349 73.7094 89.2327 73.2796C89.1305 72.8498 89.2119 72.3928 89.4769 71.9085ZM80.7906 77.1675L81.5486 77.7565L83.8973 74.7337L89.7723 79.2985L90.4129 78.4741L83.7798 73.3203L80.7906 77.1675ZM77.1986 80.3478C76.6197 80.8646 76.2259 81.4626 76.0174 82.142C75.8088 82.8214 75.7934 83.5161 75.9713 84.2259C76.1491 84.9357 76.5097 85.5951 77.053 86.2039C77.5964 86.8126 78.2106 87.2456 78.8958 87.5026C79.5809 87.7597 80.2728 87.8231 80.9715 87.6927C81.6701 87.5624 82.3089 87.2389 82.8878 86.7222C83.4668 86.2055 83.8606 85.6075 84.0691 84.928C84.2777 84.2486 84.2931 83.554 84.1152 82.8442C83.9374 82.1343 83.5768 81.475 83.0335 80.8662C82.4901 80.2574 81.8759 79.8245 81.1907 79.5675C80.5056 79.3104 79.8137 79.247 79.115 79.3773C78.4164 79.5076 77.7776 79.8311 77.1986 80.3478ZM77.8379 81.0641C78.2676 80.6805 78.7426 80.4469 79.263 80.3631C79.7834 80.2793 80.3025 80.3414 80.8205 80.5493C81.3385 80.7572 81.8105 81.0999 82.2367 81.5774C82.6628 82.0548 82.9499 82.5627 83.0978 83.1008C83.2457 83.639 83.2486 84.1619 83.1064 84.6694C82.9643 85.1769 82.6783 85.6225 82.2486 86.006C81.8189 86.3895 81.3438 86.6232 80.8235 86.707C80.3031 86.7907 79.784 86.7287 79.266 86.5208C78.748 86.3129 78.276 85.9702 77.8498 85.4927C77.4237 85.0152 77.1366 84.5074 76.9887 83.9692C76.8408 83.4311 76.8379 82.9082 76.98 82.4007C77.1222 81.8932 77.4081 81.4476 77.8379 81.0641ZM72.2849 84.3369L73.917 87.122L72.0638 88.208L68.9305 86.3027L67.9158 86.8973L71.2765 88.9058C70.884 89.312 70.6562 89.7816 70.593 90.3147C70.5299 90.8477 70.646 91.3662 70.9412 91.8701C71.2041 92.3187 71.5338 92.6518 71.9301 92.8692C72.3264 93.0867 72.7611 93.1797 73.2341 93.1482C73.7071 93.1167 74.1817 92.9615 74.658 92.6824L77.4326 91.0564L73.1857 83.8091L72.2849 84.3369ZM72.6009 89.0059L74.4024 87.9502L76.0465 90.756L74.2347 91.8177C73.7654 92.0928 73.3144 92.1855 72.8817 92.096C72.4491 92.0064 72.1094 91.7511 71.8627 91.3301C71.6119 90.9022 71.5532 90.4776 71.6865 90.0564C71.8198 89.6351 72.1246 89.285 72.6009 89.0059ZM61.6509 89.3174L61.9879 90.2164L66.1679 88.6496L67.1619 91.3014L63.8021 92.5607L64.1391 93.4596L67.4988 92.2003L68.4423 94.7173L64.4083 96.2294L64.7453 97.1283L69.7568 95.2498L66.8085 87.3842L61.6509 89.3174Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_289">
                <rect width="100" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Col>
      </Row>
    </section>
  );
};

export default Hero;
