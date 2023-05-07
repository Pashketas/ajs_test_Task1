export default function showCondition(character) {
  let result;
  if (character.health > 50) {
    result = 'healthy';
    return result;
  } if (character.health >= 15 && character.health <= 50) {
    result = 'wounded';
    return result;
  }
  result = 'critical';
  return result;
}
