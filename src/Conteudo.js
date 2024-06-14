import "./App.css";
import Modal from "react-modal";
import React, { useState } from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";

function Conteudo() {
  const [modalIsOpen, setModalIsOpen] = useState(false); 

  const openModal = () => {
      setModalIsOpen(true);
  };

  const closeModal = () => {
      setModalIsOpen(false);
  };

 


  return (
    <main className="main">
      <div className="conteudo">
        <h1>
          {" "}
          <span>
            Encontre aqui registros de madeiras feitos por marceneiros de todo o
            país. <br></br>{" "}
          </span>
          O que precisa fazer hoje?
        </h1>

        <button className="botaopesquisar" onClick={openModal}>
          <svg
            width="260"
            height="175"
            viewBox="0 0 260 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="259"
              height="174"
              rx="2.5"
              fill="#F9EB65"
              stroke="black"
            />
            <path
              d="M43.1886 27.8126C45.8979 27.8126 47.9032 28.2606 49.2046 29.1566C50.5272 30.0313 51.1886 31.5886 51.1886 33.8286C51.1886 36.0686 50.5379 37.85 49.2366 39.1726C47.9352 40.474 45.8339 41.1246 42.9326 41.1246H40.2446L40.1486 48.0686L42.6446 48.2926C42.6446 48.89 42.4632 49.53 42.1006 50.2126H34.9006L34.8046 49.1246C35.7006 48.7833 36.6179 48.5273 37.5566 48.3566C37.4286 40.0366 37.3219 33.85 37.2366 29.7966C36.6606 29.69 35.7219 29.434 34.4206 29.0286L34.5806 27.8126H43.1886ZM42.6126 39.0446C44.4472 39.0233 45.8446 38.5646 46.8046 37.6686C47.7646 36.7513 48.2446 35.546 48.2446 34.0526C48.2446 32.5593 47.7752 31.5246 46.8366 30.9486C45.8979 30.3513 44.3939 30.0526 42.3246 30.0526C41.9406 30.0526 41.2899 30.0633 40.3726 30.0846C40.3726 30.106 40.3406 33.1033 40.2766 39.0766L42.6126 39.0446ZM58.8108 30.0206L58.6508 37.7326H63.7068L63.9628 35.4286C64.5601 35.4286 65.2001 35.61 65.8828 35.9726V42.0526L64.7628 42.1486C64.4428 41.2313 64.2295 40.4633 64.1228 39.8446H58.6508C58.6081 41.7006 58.5655 44.442 58.5228 48.0686H65.8508L66.6188 45.0606L68.4748 45.1886C68.7735 46.4046 68.9228 47.482 68.9228 48.4206C68.9228 49.338 68.9015 49.9353 68.8588 50.2126H53.3068L53.2108 49.0926C54.1495 48.7513 55.0561 48.506 55.9308 48.3566C55.8028 40.0366 55.6961 33.85 55.6108 29.7966C55.1415 29.754 54.2028 29.498 52.7948 29.0286L52.9548 27.8126H68.3788C68.4215 28.09 68.4428 28.5166 68.4428 29.0926C68.4428 30.266 68.2935 31.5353 67.9948 32.9006C67.5255 33.0073 66.9068 33.0606 66.1388 33.0606L65.3708 30.0206H58.8108ZM80.0181 48.0686C83.1967 48.0686 84.7861 46.778 84.7861 44.1966C84.7861 42.938 84.0074 41.8713 82.4501 40.9966C81.7461 40.5913 80.9674 40.2073 80.1141 39.8446C79.2821 39.482 78.4394 39.0873 77.5861 38.6606C76.7327 38.234 75.9541 37.7753 75.2501 37.2846C74.5674 36.794 74.0021 36.1753 73.5541 35.4286C73.1274 34.682 72.9141 33.8393 72.9141 32.9006C72.9141 31.3646 73.5327 30.0633 74.7701 28.9966C76.0287 27.9086 77.7461 27.3646 79.9221 27.3646C82.0981 27.3646 84.3914 28.026 86.8021 29.3486C86.8021 30.5646 86.6527 32.09 86.3541 33.9246C85.8847 33.9886 85.2661 34.0206 84.4981 34.0206L83.5381 30.3086C83.2821 30.1806 82.7701 30.0526 82.0021 29.9246C81.2554 29.7966 80.5941 29.7326 80.0181 29.7326C78.7807 29.7326 77.8207 29.9993 77.1381 30.5326C76.4554 31.0446 76.1141 31.77 76.1141 32.7086C76.1141 33.626 76.5087 34.458 77.2981 35.2046C78.1087 35.93 79.0794 36.5593 80.2101 37.0926C81.3621 37.6046 82.5034 38.138 83.6341 38.6926C84.7861 39.2473 85.7567 39.9726 86.5461 40.8686C87.3567 41.7433 87.7621 42.7673 87.7621 43.9406C87.7621 46.074 87.0474 47.7273 85.6181 48.9006C84.1887 50.0526 82.3221 50.6286 80.0181 50.6286C78.7594 50.6286 77.3941 50.4366 75.9221 50.0526C74.4714 49.6473 73.2661 49.1353 72.3061 48.5166C72.3487 47.0873 72.5087 45.434 72.7861 43.5566C73.2554 43.4926 73.8741 43.4606 74.6421 43.4606L75.3141 47.3006C75.7834 47.4926 76.4874 47.674 77.4261 47.8446C78.3861 47.994 79.2501 48.0686 80.0181 48.0686ZM102.49 54.9486C101.359 54.5006 100.442 54.1806 99.7378 53.9886C99.0551 53.7966 98.4471 53.7006 97.9138 53.7006C97.4018 53.7006 96.5805 53.8286 95.4498 54.0846C94.3405 54.362 93.7325 54.5006 93.6258 54.5006C93.1565 54.1166 92.9005 53.626 92.8578 53.0286C95.1831 51.8766 96.9645 51.3006 98.2018 51.3006C99.3751 51.3006 101.05 51.7273 103.226 52.5806C104.1 52.9433 104.911 53.21 105.658 53.3806C106.426 53.5726 107.748 53.69 109.626 53.7326C109.626 54.65 109.231 55.6206 108.442 56.6446C107.311 56.5806 106.074 56.3033 104.73 55.8126C104.367 55.6846 103.62 55.3966 102.49 54.9486ZM99.6738 48.1326C103.983 48.1326 106.138 45.1033 106.138 39.0446C106.138 32.9646 103.983 29.9246 99.6738 29.9246C97.6471 29.9246 95.9938 30.2233 94.7138 30.8206C93.5618 33.1033 92.9858 35.738 92.9858 38.7246C92.9858 41.69 93.4765 44.0046 94.4578 45.6686C95.4605 47.3113 97.1991 48.1326 99.6738 48.1326ZM89.8498 39.1406C89.8498 35.386 90.6178 32.4953 92.1538 30.4686C93.7111 28.4206 96.2285 27.3966 99.7058 27.3966C103.204 27.3966 105.668 28.3353 107.098 30.2126C108.548 32.0686 109.274 34.8846 109.274 38.6606C109.274 42.4366 108.495 45.3806 106.938 47.4926C105.402 49.5833 102.938 50.6286 99.5458 50.6286C96.1751 50.6286 93.7111 49.658 92.1538 47.7166C90.6178 45.754 89.8498 42.8953 89.8498 39.1406ZM122.063 50.5966C120.847 50.5966 119.791 50.5006 118.895 50.3086C117.999 50.1166 117.135 49.7646 116.303 49.2526C114.575 48.2286 113.679 46.1913 113.615 43.1406C113.573 40.09 113.466 35.61 113.295 29.7006C112.442 29.53 111.482 29.274 110.415 28.9326L110.511 27.8126H118.543C118.906 28.4953 119.087 29.1353 119.087 29.7326C118.469 29.7753 117.583 29.818 116.431 29.8606C116.389 32.3353 116.367 36.0473 116.367 40.9966C116.367 43.6633 116.858 45.5193 117.839 46.5646C118.842 47.61 120.261 48.1326 122.095 48.1326C122.885 48.1326 123.567 48.0473 124.143 47.8766C124.741 47.706 125.327 47.3753 125.903 46.8846C127.055 45.9033 127.631 43.9193 127.631 40.9326C127.631 40.9113 127.535 37.2206 127.343 29.8606C125.679 29.37 124.719 29.0606 124.463 28.9326L124.559 27.8126H132.495C132.837 28.6873 133.007 29.3166 133.007 29.7006C131.663 29.7006 130.799 29.7113 130.415 29.7326C130.373 31.4393 130.319 33.8606 130.255 36.9966C130.213 40.1113 130.181 42.1593 130.159 43.1406C130.095 45.5726 129.349 47.4286 127.919 48.7086C126.49 49.9673 124.538 50.5966 122.063 50.5966ZM141.58 29.8606L141.26 48.0366L143.948 48.2926C143.948 48.89 143.767 49.53 143.404 50.2126H136.044L135.948 49.0926C136.93 48.7513 137.9 48.4953 138.86 48.3246C138.818 46.938 138.743 44.0793 138.636 39.7486C138.551 35.418 138.476 32.0686 138.412 29.7006C137.559 29.53 136.599 29.274 135.532 28.9326L135.628 27.8126H143.628C143.991 28.4953 144.172 29.1353 144.172 29.7326C143.084 29.818 142.22 29.8606 141.58 29.8606ZM155.081 48.0686C158.259 48.0686 159.849 46.778 159.849 44.1966C159.849 42.938 159.07 41.8713 157.513 40.9966C156.809 40.5913 156.03 40.2073 155.177 39.8446C154.345 39.482 153.502 39.0873 152.649 38.6606C151.795 38.234 151.017 37.7753 150.313 37.2846C149.63 36.794 149.065 36.1753 148.617 35.4286C148.19 34.682 147.977 33.8393 147.977 32.9006C147.977 31.3646 148.595 30.0633 149.833 28.9966C151.091 27.9086 152.809 27.3646 154.985 27.3646C157.161 27.3646 159.454 28.026 161.865 29.3486C161.865 30.5646 161.715 32.09 161.417 33.9246C160.947 33.9886 160.329 34.0206 159.561 34.0206L158.601 30.3086C158.345 30.1806 157.833 30.0526 157.065 29.9246C156.318 29.7966 155.657 29.7326 155.081 29.7326C153.843 29.7326 152.883 29.9993 152.201 30.5326C151.518 31.0446 151.177 31.77 151.177 32.7086C151.177 33.626 151.571 34.458 152.361 35.2046C153.171 35.93 154.142 36.5593 155.273 37.0926C156.425 37.6046 157.566 38.138 158.697 38.6926C159.849 39.2473 160.819 39.9726 161.609 40.8686C162.419 41.7433 162.825 42.7673 162.825 43.9406C162.825 46.074 162.11 47.7273 160.681 48.9006C159.251 50.0526 157.385 50.6286 155.081 50.6286C153.822 50.6286 152.457 50.4366 150.985 50.0526C149.534 49.6473 148.329 49.1353 147.369 48.5166C147.411 47.0873 147.571 45.434 147.849 43.5566C148.318 43.4926 148.937 43.4606 149.705 43.4606L150.377 47.3006C150.846 47.4926 151.55 47.674 152.489 47.8446C153.449 47.994 154.313 48.0686 155.081 48.0686ZM169.424 28.4846C169.808 28.3566 170.854 28.218 172.56 28.0686C174.267 27.898 175.814 27.8126 177.2 27.8126C178.608 27.8126 179.696 27.8766 180.464 28.0046C180.486 28.09 180.496 28.1966 180.496 28.3246C180.496 28.4313 180.432 28.698 180.304 29.1246C180.198 29.5513 180.112 29.8286 180.048 29.9566C179.878 30.1273 179.398 30.2553 178.608 30.3406L184.72 48.0366L187.76 48.2926C187.76 48.89 187.579 49.53 187.216 50.2126H179.856L179.76 49.0926C180.251 48.8366 180.966 48.6126 181.904 48.4206L180.272 43.8446H171.344L169.84 48.0366L172.432 48.2926C172.432 48.89 172.251 49.53 171.888 50.2126H164.528L164.432 49.0926C165.264 48.794 166.15 48.5593 167.088 48.3886L173.296 30.2446C171.398 30.0313 170.064 29.7753 169.296 29.4766L169.424 28.4846ZM177.744 36.7086L176.048 30.4366C175.92 30.4153 175.739 30.4046 175.504 30.4046L173.776 36.9326L171.92 41.7966H179.696L177.744 36.7086ZM200.217 30.3726C199.534 30.1593 198.627 30.0526 197.497 30.0526H194.841L194.745 38.1166L197.177 38.0846C198.755 38.0633 200.014 37.7433 200.953 37.1246C201.891 36.506 202.361 35.3326 202.361 33.6046C202.361 31.8553 201.646 30.778 200.217 30.3726ZM194.713 40.1646L194.617 48.0686L197.273 48.2926C197.273 48.89 197.091 49.53 196.729 50.2126H189.369L189.273 49.0926C190.169 48.7726 191.086 48.5273 192.025 48.3566C191.897 40.25 191.79 34.0633 191.705 29.7966C191.107 29.7113 190.169 29.4553 188.889 29.0286C188.889 28.7513 188.942 28.346 189.049 27.8126H196.249C200.153 27.8126 202.691 28.2926 203.865 29.2526C205.017 30.17 205.593 31.61 205.593 33.5726C205.593 36.8793 203.779 39.0233 200.153 40.0046L205.625 48.1006L208.281 48.3246C208.281 48.9006 208.099 49.53 207.737 50.2126H203.801L197.081 40.1646H194.713Z"
              fill="black"
            />
            <path
              d="M207.119 143.175C205.37 147.614 202.177 148.806 194.044 149.504C165.365 134.719 152.963 128.397 129.917 116.625L131.785 114.773L127.738 112.303C111.415 118.722 101.131 119.111 81.666 116.625C65.5256 113.181 56.4509 108.753 53.0267 101.035C49.6024 93.3173 54.1733 83.2496 75.4401 75.4118C94.5451 71.1287 116.127 71.9559 131.785 79.8881C147.442 87.8204 147.789 100.391 131.785 109.988L136.454 112.303L140.19 111.377C166.374 123.903 181.065 130.948 207.119 143.175Z"
              fill="#D2C4C4"
              fill-opacity="0.98"
              stroke="black"
              stroke-width="10"
            />
            <path
              d="M132.573 94.4368C132.573 98.5504 129.201 102.678 122.825 105.867C116.539 109.011 107.751 110.999 97.9611 110.999C88.1714 110.999 79.3826 109.011 73.0968 105.867C66.7214 102.678 63.3488 98.5504 63.3488 94.4368C63.3488 90.3231 66.7214 86.1954 73.0968 83.0066C79.3826 79.8627 88.1714 77.8749 97.9611 77.8749C107.751 77.8749 116.539 79.8627 122.825 83.0066C129.201 86.1954 132.573 90.3231 132.573 94.4368Z"
              fill="white"
              stroke="black"
              stroke-width="3"
            />
          </svg>{" "}
        </button>
        <Modal
          className="modalpesquisar"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="ModalPesquisar"
        >
          {" "}
          <div className="conteudomodalpesquisar">
            <h2>Como é a madeira que procura?</h2>
            <Formulario></Formulario>
            <button onClick={closeModal}>Close</button>
            
          </div>
          
        </Modal>

        <button className="botaocadastrar">
          <svg
            width="260"
            height="175"
            viewBox="0 0 260 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="259"
              height="174"
              rx="2.5"
              fill="#F9EB65"
              stroke="black"
            />
            <path
              d="M55.4842 27.16C54.8016 26.9467 53.8949 26.84 52.7642 26.84H50.1082L50.0122 34.904L52.4442 34.872C54.0229 34.8507 55.2816 34.5307 56.2202 33.912C57.1589 33.2933 57.6282 32.12 57.6282 30.392C57.6282 28.6427 56.9136 27.5653 55.4842 27.16ZM49.9802 36.952L49.8842 44.856L52.5402 45.08C52.5402 45.6773 52.3589 46.3173 51.9962 47H44.6362L44.5402 45.88C45.4362 45.56 46.3536 45.3147 47.2922 45.144C47.1642 37.0373 47.0576 30.8507 46.9722 26.584C46.3749 26.4987 45.4362 26.2427 44.1562 25.816C44.1562 25.5387 44.2096 25.1333 44.3162 24.6H51.5162C55.4202 24.6 57.9589 25.08 59.1322 26.04C60.2842 26.9573 60.8602 28.3973 60.8602 30.36C60.8602 33.6667 59.0469 35.8107 55.4202 36.792L60.8922 44.888L63.5482 45.112C63.5482 45.688 63.3669 46.3173 63.0042 47H59.0682L52.3482 36.952H49.9802ZM71.1722 26.808L71.0122 34.52H76.0682L76.3242 32.216C76.9216 32.216 77.5616 32.3973 78.2442 32.76V38.84L77.1242 38.936C76.8042 38.0187 76.5909 37.2507 76.4842 36.632H71.0122C70.9696 38.488 70.9269 41.2293 70.8842 44.856H78.2122L78.9802 41.848L80.8362 41.976C81.1349 43.192 81.2842 44.2693 81.2842 45.208C81.2842 46.1253 81.2629 46.7227 81.2202 47H65.6682L65.5722 45.88C66.5109 45.5387 67.4176 45.2933 68.2922 45.144C68.1642 36.824 68.0576 30.6373 67.9722 26.584C67.5029 26.5413 66.5642 26.2853 65.1562 25.816L65.3162 24.6H80.7402C80.7829 24.8773 80.8042 25.304 80.8042 25.88C80.8042 27.0533 80.6549 28.3227 80.3562 29.688C79.8869 29.7947 79.2682 29.848 78.5002 29.848L77.7322 26.808H71.1722ZM93.2755 47.416C90.4168 47.416 88.1342 46.4347 86.4275 44.472C84.7208 42.5093 83.8675 39.608 83.8675 35.768C83.8675 31.9067 84.6035 29.016 86.0755 27.096C87.5688 25.1547 89.8835 24.184 93.0195 24.184C96.1768 24.184 98.8328 24.9733 100.987 26.552C100.987 27.64 100.838 28.9307 100.539 30.424C100.07 30.5093 99.4515 30.552 98.6835 30.552L97.9795 27.256C96.7635 26.8507 95.2702 26.648 93.4995 26.648C92.3262 26.648 90.7155 26.968 88.6675 27.608C88.5395 27.8427 88.3795 28.1733 88.1875 28.6C87.9955 29.0053 87.7395 29.88 87.4195 31.224C87.1208 32.5467 86.9715 33.88 86.9715 35.224C86.9715 41.7733 89.0942 45.048 93.3395 45.048C95.5795 45.048 97.3075 44.6427 98.5235 43.832C98.6088 41.144 98.6622 39.128 98.6835 37.784L95.5795 37.016L95.6755 35.896H103.035C103.398 36.5787 103.579 37.2187 103.579 37.816C102.747 37.944 101.851 38.0293 100.891 38.072C101.019 41.656 101.083 44.1307 101.083 45.496C100.55 45.8587 99.4835 46.2747 97.8835 46.744C96.3048 47.192 94.7688 47.416 93.2755 47.416ZM112.004 26.648L111.684 44.824L114.372 45.08C114.372 45.6773 114.191 46.3173 113.828 47H106.468L106.372 45.88C107.354 45.5387 108.324 45.2827 109.284 45.112C109.242 43.7253 109.167 40.8667 109.06 36.536C108.975 32.2053 108.9 28.856 108.836 26.488C107.983 26.3173 107.023 26.0613 105.956 25.72L106.052 24.6H114.052C114.415 25.2827 114.596 25.9227 114.596 26.52C113.508 26.6053 112.644 26.648 112.004 26.648ZM125.504 44.856C128.683 44.856 130.272 43.5653 130.272 40.984C130.272 39.7253 129.494 38.6587 127.936 37.784C127.232 37.3787 126.454 36.9947 125.6 36.632C124.768 36.2693 123.926 35.8747 123.072 35.448C122.219 35.0213 121.44 34.5627 120.736 34.072C120.054 33.5813 119.488 32.9627 119.04 32.216C118.614 31.4693 118.4 30.6267 118.4 29.688C118.4 28.152 119.019 26.8507 120.256 25.784C121.515 24.696 123.232 24.152 125.408 24.152C127.584 24.152 129.878 24.8133 132.288 26.136C132.288 27.352 132.139 28.8773 131.84 30.712C131.371 30.776 130.752 30.808 129.984 30.808L129.024 27.096C128.768 26.968 128.256 26.84 127.488 26.712C126.742 26.584 126.08 26.52 125.504 26.52C124.267 26.52 123.307 26.7867 122.624 27.32C121.942 27.832 121.6 28.5573 121.6 29.496C121.6 30.4133 121.995 31.2453 122.784 31.992C123.595 32.7173 124.566 33.3467 125.696 33.88C126.848 34.392 127.99 34.9253 129.12 35.48C130.272 36.0347 131.243 36.76 132.032 37.656C132.843 38.5307 133.248 39.5547 133.248 40.728C133.248 42.8613 132.534 44.5147 131.104 45.688C129.675 46.84 127.808 47.416 125.504 47.416C124.246 47.416 122.88 47.224 121.408 46.84C119.958 46.4347 118.752 45.9227 117.792 45.304C117.835 43.8747 117.995 42.2213 118.272 40.344C118.742 40.28 119.36 40.248 120.128 40.248L120.8 44.088C121.27 44.28 121.974 44.4613 122.912 44.632C123.872 44.7813 124.736 44.856 125.504 44.856ZM146.344 26.584C146.238 30.168 146.12 36.248 145.992 44.824L148.68 45.08C148.68 45.6773 148.499 46.3173 148.136 47H140.776L140.68 45.88C141.918 45.432 142.899 45.176 143.624 45.112C143.411 36.8773 143.24 30.7013 143.112 26.584H138.44L137.672 29.848L135.816 29.72C135.496 28.4187 135.336 27.096 135.336 25.752C135.336 25.496 135.358 25.112 135.4 24.6H153.832C153.875 24.8773 153.896 25.304 153.896 25.88C153.896 27.032 153.747 28.2907 153.448 29.656C152.979 29.784 152.36 29.848 151.592 29.848L150.792 26.584H146.344ZM166.859 27.16C166.177 26.9467 165.27 26.84 164.139 26.84H161.483L161.387 34.904L163.819 34.872C165.398 34.8507 166.657 34.5307 167.595 33.912C168.534 33.2933 169.003 32.12 169.003 30.392C169.003 28.6427 168.289 27.5653 166.859 27.16ZM161.355 36.952L161.259 44.856L163.915 45.08C163.915 45.6773 163.734 46.3173 163.371 47H156.011L155.915 45.88C156.811 45.56 157.729 45.3147 158.667 45.144C158.539 37.0373 158.433 30.8507 158.347 26.584C157.75 26.4987 156.811 26.2427 155.531 25.816C155.531 25.5387 155.585 25.1333 155.691 24.6H162.891C166.795 24.6 169.334 25.08 170.507 26.04C171.659 26.9573 172.235 28.3973 172.235 30.36C172.235 33.6667 170.422 35.8107 166.795 36.792L172.267 44.888L174.923 45.112C174.923 45.688 174.742 46.3173 174.379 47H170.443L163.723 36.952H161.355ZM180.723 25.272C181.107 25.144 182.153 25.0053 183.859 24.856C185.566 24.6853 187.113 24.6 188.499 24.6C189.907 24.6 190.995 24.664 191.763 24.792C191.785 24.8773 191.795 24.984 191.795 25.112C191.795 25.2187 191.731 25.4853 191.603 25.912C191.497 26.3387 191.411 26.616 191.347 26.744C191.177 26.9147 190.697 27.0427 189.907 27.128L196.019 44.824L199.059 45.08C199.059 45.6773 198.878 46.3173 198.515 47H191.155L191.059 45.88C191.55 45.624 192.265 45.4 193.203 45.208L191.571 40.632H182.643L181.139 44.824L183.731 45.08C183.731 45.6773 183.55 46.3173 183.187 47H175.827L175.731 45.88C176.563 45.5813 177.449 45.3467 178.387 45.176L184.595 27.032C182.697 26.8187 181.363 26.5627 180.595 26.264L180.723 25.272ZM189.043 33.496L187.347 27.224C187.219 27.2027 187.038 27.192 186.803 27.192L185.075 33.72L183.219 38.584H190.995L189.043 33.496ZM211.515 27.16C210.833 26.9467 209.926 26.84 208.795 26.84H206.139L206.043 34.904L208.475 34.872C210.054 34.8507 211.313 34.5307 212.251 33.912C213.19 33.2933 213.659 32.12 213.659 30.392C213.659 28.6427 212.945 27.5653 211.515 27.16ZM206.011 36.952L205.915 44.856L208.571 45.08C208.571 45.6773 208.39 46.3173 208.027 47H200.667L200.571 45.88C201.467 45.56 202.385 45.3147 203.323 45.144C203.195 37.0373 203.089 30.8507 203.003 26.584C202.406 26.4987 201.467 26.2427 200.187 25.816C200.187 25.5387 200.241 25.1333 200.347 24.6H207.547C211.451 24.6 213.99 25.08 215.163 26.04C216.315 26.9573 216.891 28.3973 216.891 30.36C216.891 33.6667 215.078 35.8107 211.451 36.792L216.923 44.888L219.579 45.112C219.579 45.688 219.398 46.3173 219.035 47H215.099L208.379 36.952H206.011Z"
              fill="black"
            />
            <rect
              x="48.5"
              y="66.5"
              width="163"
              height="82"
              fill="white"
              stroke="black"
            />
            <line
              y1="-0.5"
              x2="141.282"
              y2="-0.5"
              transform="matrix(0.999997 -0.0022862 0.0109617 0.99994 63.619 95.8281)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="141.282"
              y2="-0.5"
              transform="matrix(0.999997 -0.0022862 0.0109617 0.99994 63.619 100.366)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="141.282"
              y2="-0.5"
              transform="matrix(0.999997 -0.0022862 0.0109617 0.99994 63.619 104.905)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="141.282"
              y2="-0.5"
              transform="matrix(0.999997 -0.0022862 0.0109617 0.99994 63.619 109.443)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="141.282"
              y2="-0.5"
              transform="matrix(0.999997 -0.0022862 0.0109617 0.99994 63.619 113.983)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="141.282"
              y2="-0.5"
              transform="matrix(0.999997 -0.0022862 0.0109617 0.99994 63.619 118.521)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="141.282"
              y2="-0.5"
              transform="matrix(0.999997 -0.0022862 0.0109617 0.99994 63.619 123.06)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="141.282"
              y2="-0.5"
              transform="matrix(0.999997 -0.0022862 0.0109617 0.99994 63.619 127.598)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="141.282"
              y2="-0.5"
              transform="matrix(0.999997 -0.0022862 0.0109617 0.99994 63.619 95.8281)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="141.282"
              y2="-0.5"
              transform="matrix(0.999997 -0.0022862 0.0109617 0.99994 63.619 100.366)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="141.282"
              y2="-0.5"
              transform="matrix(0.999997 -0.0022862 0.0109617 0.99994 63.619 104.905)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="141.282"
              y2="-0.5"
              transform="matrix(0.999997 -0.0022862 0.0109617 0.99994 63.619 109.443)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="72.4193"
              y2="-0.5"
              transform="matrix(0.999998 -0.00208303 0.00998764 0.99995 132.485 80.4164)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="72.4193"
              y2="-0.5"
              transform="matrix(0.999998 -0.00208303 0.00998764 0.99995 131.775 85.2798)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <line
              y1="-0.5"
              x2="72.4193"
              y2="-0.5"
              transform="matrix(0.999998 -0.00208303 0.00998764 0.99995 131.775 90.1431)"
              stroke="black"
              stroke-dasharray="6 6"
            />
            <path
              d="M64.119 73.957H122.045V90.7891H64.119V73.957Z"
              stroke="black"
            />
            <line
              y1="-0.5"
              x2="72.4193"
              y2="-0.5"
              transform="matrix(0.999998 -0.00208303 0.00998764 0.99995 132.483 75.3157)"
              stroke="black"
              stroke-dasharray="6 6"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}

export default Conteudo;