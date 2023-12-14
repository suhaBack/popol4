import { useState } from "react";
import { API_URL } from "../../../config/contansts";

const getKindsLabel = (kinds) => {
  switch (kinds) {
    case 0:
      return "빵";
    case 1:
      return "야채";
    case 2:
      return "소스";
  }
};

const getTagsabel = (tags) => {
  switch (tags) {
    case 0:
      return "클래식";
    case 1:
      return "프레쉬&라이트";
    case 2:
      return "프리미엄";
    case 3:
      return "신제품";
    case 4:
      return "시그니처 랩";
    case 5:
      return "미니 랩";
    case 6:
      return "클래식";
    case 7:
      return "프레쉬&라이트";
    case 8:
      return "프리미엄";
    case 9:
      return "신제품";
    case 10:
      return "샌드위치";
    case 11:
      return "랩";
    case 12:
      return "스마일 썹";
    case 13:
      return "샌드위치";
    case 14:
      return "쿠키";
  }
};

const getStatusLabel = (status) => {
  switch (status) {
    case 0:
      return "출시";
    case 1:
      return "품절";
    case 2:
      return "판매종료";
  }
};

function Jeryoresult(props) {
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newCheckedItems = newSelectAll
      ? props.filteredResults.map((item) => item.id)
      : [];
    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxChange = (id) => {
    const isChecked = checkedItems.includes(id);

    if (isChecked) {
      // 이미 체크된 아이템이면 제거
      setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
    } else {
      // 체크되지 않은 아이템이면 추가
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleDeleteButtonClick = () => {
    // 선택된 아이템을 삭제하는 함수
    props.onDeleteItems(checkedItems);
    // 체크된 아이템 초기화
    setCheckedItems([]);
  };

  const handleEditButtonClick = (id) => {
    // 수정 버튼 클릭 시 해당 상품의 아이디를 가져와서 사용할 수 있습니다.
    props.setPage("edit");
    props.setId(id);
    // 여기에서 아이디를 사용하여 수정하는 로직을 추가할 수 있습니다.
  };

  const count = props.filteredResults.length;

  return (
    <>
      <div className="CHM_adminProductPageSubTitle">
        <div style={{ fontSize: "1.7vw" }}>상품리스트 ({count}건)</div>
        <div
          className="CHM_adminProductPlusBtn"
          onClick={() => props.setPage("plus")}
        >
          +상품추가
        </div>
      </div>
      <div className="CHM_adminProductpageTableBox">
        <table>
          <thead>
            <tr>
              <th style={{ width: "5%" }}>
                <input
                  type="checkbox"
                  onChange={handleSelectAllChange}
                  checked={selectAll}
                />
              </th>
              <th style={{ width: "5%" }}>번호</th>
              <th style={{ width: "10%" }}>이미지</th>
              <th style={{ width: "10%" }}>상품아이디</th>
              <th style={{ width: "20%" }}>
                <div
                  style={{
                    paddingBottom: "0.7vw",
                    borderBottom: "1px solid #c6c6c6",
                  }}
                >
                  상품명
                </div>
                <div style={{ paddingTop: "0.7vw" }}>카테고리</div>
              </th>
              <th style={{ width: "10%" }}>최초등록일</th>
              <th style={{ width: "10%" }}>최근수정일</th>
              <th style={{ width: "10%" }}>진열</th>
              <th style={{ width: "10%" }}>가격</th>
              <th style={{ width: "10%" }}>관리</th>
            </tr>
          </thead>
          <tbody>
            {props.filteredResults.map((a, i) => {
              return (
                <tr key={a.id} style={{ height: "6vw" }}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(a.id)}
                      checked={checkedItems.includes(a.id)}
                    />
                  </td>
                  <td>{i + 1}</td>
                  <td>
                    <img src={API_URL+"/upload/"+a.image_url} width="70%"></img>
                  </td>
                  <td>{a.id}</td>
                  <td
                    style={{
                      display: "grid",
                      gridTemplateRows: "1fr 1fr",
                      height: "6vw",
                      padding: "0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderBottom: "1px solid #c6c6c6",
                      }}
                    >
                      {a.kname}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      타입: {getKindsLabel(a.kinds)} / 종류:{" "}
                      {getTagsabel(a.tags)}
                    </div>
                  </td>
                  <td>2023-01-01</td>
                  <td>2023-12-08</td>
                  <td>{getStatusLabel(a.status)}</td>
                  <td>{a.price}원</td>
                  <td>
                    <button
                      className="CHM_adminproducttdBtn"
                      style={{
                        fontSize: "1vw",
                        marginRight: "0.8vw",
                        padding: "0.3vw 0.6vw",
                        backgroundColor: "rgb(52, 52, 52)",
                        color: "white",
                        border: "none"
                      }}
                      onClick={() => handleEditButtonClick(a.id)}
                    >
                      수정
                    </button>
                    <button
                      className="CHM_adminproducttdBtn"
                      onClick={handleDeleteButtonClick}
                      style={{ fontSize: "1vw", padding: "0.3vw 0.6vw", backgroundColor:"red", color:"white", border:"none"}}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Jeryoresult;