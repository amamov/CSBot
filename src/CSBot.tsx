import { useEffect, useState } from "react";

export default function CSBot() {
  const [visableChat, setVisableChat] = useState(false);
  const toggleChat = () => {
    setVisableChat((prev) => !prev);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {visableChat && (
        <div
          style={{
            border: "1px solid black",
            width: "500px",
            height: "500px",
            borderRadius: "5%",
            padding: "20px",
          }}
        >
          <Message text="안녕! 저는 안내를 도울 '핀츠'라고 해요!" />
          <DelayedComponent delay={1000}>
            <Message text="궁금한 내용의 카테고리를 아래에서 골라주세요!" />
          </DelayedComponent>
        </div>
      )}

      <div
        onClick={toggleChat}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        CS
      </div>
    </div>
  );
}

function Message({ text }: { text: string }) {
  return <div>{text}</div>;
}

function DelayedComponent({
  children,
  delay = 3000,
  loading = <div></div>,
}: {
  delay?: number;
  children: React.ReactNode;
  loading?: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) {
    return <>{loading}</>;
  }
  return <>{children}</>;
}
