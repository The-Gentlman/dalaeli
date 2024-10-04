'use client';
import React, { useState } from "react";

const PhoneModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {/* Button with Your Phone SVG */}
      <button onClick={toggleModal} className="open-modal-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="40"
          height="40"
          style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
          }}
          viewBox="0 0 6.827 6.827"
        >
          <defs>
            <style>
              {`.fil0{fill:none}.fil2{fill:#e64a19}`}
            </style>
          </defs>
          <g id="Layer_x0020_1">
            <g id="_491463032">
              <path id="_491463320" className="fil0" d="M0 0h6.827v6.827H0z" />
              <path id="_491463128" className="fil0" d="M.853.853h5.12v5.12H.853z" />
            </g>
            <g id="_491478824">
              <path
                id="_491463224"
                d="M.909 2.24c.067 1.39 1.968 3.158 3.255 3.57.863.275 2.148-.269 1.64-.777L5 4.23c-.122-.123-.32-.108-.439.01l-.46.462c-.992-.54-1.408-.966-1.953-1.951l.462-.462c.119-.119.132-.317.01-.439l-.803-.803C1.37.598.883 1.715.908 2.24z"
                style={{ fill: "#ff6e40" }}
              />
              <path
                id="_491478584"
                className="fil2"
                d="m.909 2.24 1.24.51.462-.46c.119-.12.132-.318.01-.44l-.803-.803C1.37.598.883 1.715.908 2.24z"
              />
              <path
                id="_491478176"
                className="fil2"
                d="M4.164 5.81c.863.275 2.148-.269 1.64-.777L5 4.23c-.122-.123-.32-.108-.439.01l-.46.462.062 1.107z"
              />
            </g>
          </g>
        </svg>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Contact us at:</p>
            <a href="tel:+1234567890" className="phone-number">
              +1 234 567 890
            </a>
            <button onClick={toggleModal} className="close-modal-button">
              Close
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        .open-modal-button {
          position: fixed;
          right: 30px;
          bottom: 60px;
          color: black;
          background-color: #fedf78;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          cursor: pointer;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease; /* For smooth hover transition */
        }

        /* Hover Animation */
        .open-modal-button:hover {
          animation: ring-animation 1.5s infinite;
          transform: scale(1.05); /* Slightly enlarges the button */
        }

        @keyframes ring-animation {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 110, 64, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 110, 64, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 110, 64, 0);
          }
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }

        .phone-number {
          color: #0070f3;
          font-size: 18px;
          display: block;
          margin-top: 10px;
          text-decoration: none;
        }

        .close-modal-button {
          margin-top: 15px;
          padding: 5px 10px;
          background-color: #ff0000;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default PhoneModal;
