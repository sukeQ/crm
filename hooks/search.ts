export function findObjectsWithText(array: any, text: string) {
  return array.filter((object: any) => {
    return Object.values(object).some((value) => {
      // nullまたはundefinedの値をチェックして、そのような場合は含む文字列がないと見なします。
      return (
        value !== null && value !== undefined && value.toString().includes(text)
      );
    });
  });
}
