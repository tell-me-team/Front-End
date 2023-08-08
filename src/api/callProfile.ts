export const callProfile = async (userId: string) => {
  console.log(userId);
  try {
    const profileName = "지희";
    const profileType = "잭 스패로우";
    const profileKeyword = ["자유로움", "센스", "반항적", "모험심", "협력", "독특한"];

    return { profileName, profileType, profileKeyword };
  } catch (error) {
    throw console.error(error);
  }
};
