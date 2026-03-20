# Calculator CI/CD Demo

Project demo GitHub Actions voi mot ung dung Calculator don gian va unit tests bang Jest.

## Cau truc project

- `index.html`: giao dien calculator de demo nhanh
- `calculator.js`: logic tinh toan
- `app.js`: xu ly tuong tac tren trinh duyet
- `calculator.test.js`: unit tests bang Jest
- `.github/workflows/ci.yml`: pipeline CI tren GitHub Actions

## Chay local

```bash
npm install
npm test
```

Mo file `index.html` trong trinh duyet de xem giao dien calculator.

Neu PowerShell bao loi execution policy khi chay `npm test`, dung:

```bash
cmd /c npm test
```

## Kich ban thuyet trinh 5-7 phut

### 1. Gioi thieu project

- Day la mot calculator don gian co unit tests.
- Moi lan push code, GitHub Actions se tu dong chay tests.

### 2. Demo pipeline FAIL

Sua file `calculator.js` nhu sau:

```javascript
function add(a, b) {
  return normalizeNumber(a) - normalizeNumber(b);
}
```

Sau do:

1. Commit va push len GitHub.
2. Mo tab `Actions`.
3. Chon workflow `CI Pipeline`.
4. Cho pipeline fail va mo log test.

Ket qua mong doi:

- Pipeline mau do
- Test `cong 2 + 3 = 5` bi fail
- Log hien `Expected: 5` va `Received: -1`

### 3. Demo pipeline PASS

Sua lai dung:

```javascript
function add(a, b) {
  return normalizeNumber(a) + normalizeNumber(b);
}
```

Sau do commit, push lai va mo `Actions` de xem pipeline xanh.

### 4. Ket luan

- CI tu dong chay tests moi khi co push hoac pull request
- Loi duoc phat hien ngay lap tuc
- Giam rui ro merge code loi vao nhanh chinh
