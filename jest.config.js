
module.exports = {
  transform:  {
    "\\.(ts)$": "ts-jest"
  },
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};
