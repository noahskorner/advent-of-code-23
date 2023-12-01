import { day1, part1Regex, part2Regex } from "./day-1";

describe("day1 should", () => {
  describe("part1", () => {
    it('returns 12 when array is ["1abc2"]', () => {
      // Arrange && Act
      const response = day1(["1abc2"], part1Regex);

      // Assert
      expect(response).toBe(12);
    });
    it('returns 38 when array is ["pqr3stu8vwx"]', () => {
      // Arrange && Act
      const response = day1(["pqr3stu8vwx"], part1Regex);

      // Assert
      expect(response).toBe(38);
    });
    it('returns 15 when array is ["a1b2c3d4e5f"]', () => {
      // Arrange && Act
      const response = day1(["a1b2c3d4e5f"], part1Regex);

      // Assert
      expect(response).toBe(15);
    });
    it('returns 77 when array is ["treb7uchet"]', () => {
      // Arrange && Act
      const response = day1(["treb7uchet"], part1Regex);

      // Assert
      expect(response).toBe(77);
    });
    it('returns 142 when array is ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]', () => {
      // Arrange && Act
      const response = day1(
        ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"],
        part1Regex
      );

      // Assert
      expect(response).toBe(142);
    });
  });
  describe("part2", () => {
    it('returns 29 when array is ["two1nine"]', () => {
      // Arrange && Act
      const response = day1(["two1nine"], part2Regex);

      // Assert
      expect(response).toBe(29);
    });
    it('returns 83 when array is ["eightwothree"]', () => {
      // Arrange && Act
      const response = day1(["eightwothree"], part2Regex);

      // Assert
      expect(response).toBe(83);
    });
    it('returns 13 when array is ["abcone2threexyz"]', () => {
      // Arrange && Act
      const response = day1(["abcone2threexyz"], part2Regex);

      // Assert
      expect(response).toBe(13);
    });
    it('returns 24 when array is ["xtwone3four"]', () => {
      // Arrange && Act
      const response = day1(["xtwone3four"], part2Regex);

      // Assert
      expect(response).toBe(24);
    });
    it('returns 42 when array is ["4nineeightseven2"]', () => {
      // Arrange && Act
      const response = day1(["4nineeightseven2"], part2Regex);

      // Assert
      expect(response).toBe(42);
    });
    it('returns 14 when array is ["zoneight234"]', () => {
      // Arrange && Act
      const response = day1(["zoneight234"], part2Regex);

      // Assert
      expect(response).toBe(14);
    });
    it('returns 76 when array is ["7pqrstsixteen"]', () => {
      // Arrange && Act
      const response = day1(["7pqrstsixteen"], part2Regex);

      // Assert
      expect(response).toBe(76);
    });
    it('returns 281 when array is ["two1nine", "eightwothree", "abcone2threexyz", "xtwone3four", "4nineeightseven2", "zoneight234", "7pqrstsixteen"]', () => {
      // Arrange && Act
      const response = day1(
        [
          "two1nine",
          "eightwothree",
          "abcone2threexyz",
          "xtwone3four",
          "4nineeightseven2",
          "zoneight234",
          "7pqrstsixteen",
        ],
        part2Regex
      );

      // Assert
      expect(response).toBe(281);
    });
  });
});
