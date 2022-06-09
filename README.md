# week6_02

# 第六週：JWT 身份驗證機制

## LV1 ~ 設計五個 API

-   POST：{url}/users/sign_up：註冊
-   POST：{url}/users/sign_in：登入
-   POST：{url}/users/updatePassword: 重設密碼
-   GET：{url}/users/profile: 取得個人資料，需設計 isAuth middleware。
-   PATCH：{url}/users/profile: 更新個人資料，需設計 isAuth middleware

## 作業備註：

註冊：重複 email 的錯誤訊息要改

---

## 日誌：

-   註冊 user
-   登入
-   無法更新密碼，錯誤訊息："message": "Cannot read properties of undefined (reading 'id')" - 己解決：程式寫錯了
-   更新個人檔案
