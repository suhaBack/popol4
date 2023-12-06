import { useEffect, useState } from "react";
import img from "./sandwich.png";

function Saladct() {
  const [data, setData] = useState([
    {
      id: 1,
      Kname: "샐러드 스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 2,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 3,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },

    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
  ]);

  const [select, setSelect] = useState("All");
  const categories = ["All", "클래식", "플레쉬&라이트", "프리미엄", "신제품", "추가 선택"];

  const handleCategoryClick = (category) => {
    setSelect(category);
  };

  const [end ,setEnd] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!isInitialLoad) {
      setTimeout(() => {
        setEnd("end");
      }, 400);

      return () => {
        setEnd("end2");
      };
    } else {
      setIsInitialLoad(false);
    }
  }, [select, isInitialLoad]);

  return (
    <div style={{position: "relative"}}>
      <div className="CHM_subSelectbar">
        <div className="CHM_saladSubSelectList">
        {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              style={select === category ? { color: "#009223" } : {}}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="CHM_selectcontent">
        <div className="CHM_selectcontentGridBox">
          {data.map((a, i) => {
            return (
              <div className={"CHM_selectCard start " + end}>
                <a href={`/menuIntro/salad/${a.id}`}>
                  <div className="CHM_selectBakcCard">
                    <div>
                      <div className="CHM_selectBackCardKname">{a.Kname}</div>
                      <div className="CHM_selectBackCardEname">{a.Ename}</div>
                      <div className="CHM_selectBackCardContent">
                        {a.content}
                      </div>
                    </div>
                    <div className="CHM_selectBackCardIcon">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </div>
                </a>

                <div className="CHM_selectCardImg">
                  <img src={a.img} width="100%"></img>
                </div>
                <div className="CHM_selectCardKname">{a.Kname}</div>
                <div className="CHM_selectCardEname">{a.Ename}</div>
                <div className="CHM_selectCardkcal">{a.kcal} kcal</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Saladct;
