// O(n) Time | O(n) Space
//  n = text.length()
//  Algorithm scales linearly with input string size.

import java.util.HashMap;
import java.util.Map;

class Solution {
    private static boolean _isInitialized = false;
    private static final Map<Character, Integer> _targetFrequencies = new HashMap<>();

    public Solution() {
        if (!_isInitialized) {
            _targetFrequencies.put('b', 1);
            _targetFrequencies.put('a', 1);
            _targetFrequencies.put('l', 2);
            _targetFrequencies.put('o', 2);
            _targetFrequencies.put('n', 1);

            _isInitialized = true;
        }
    }

    public int maxNumberOfBalloons(String text) {
        HashMap<Character, Integer> frequencyMap = new HashMap<>();

        for (int i = 0; i < text.length(); i++) {
            final char c = text.charAt(i);

            if (_targetFrequencies.containsKey(c)) {
                frequencyMap.put(
                        c,
                        frequencyMap.getOrDefault(c, 0) + 1
                );
            }
        }

        int answer = 0;
        boolean answerChanged = false;
        for (Map.Entry<Character, Integer> kvp : _targetFrequencies.entrySet()) {
            final Character character = kvp.getKey();
            final Integer frequency = kvp.getValue();

            if (!frequencyMap.containsKey(character)) {
                return 0;
            }

            final int requiredFrequency = frequencyMap.get(character) / frequency;

            if (answerChanged) {
                answer = Math.min(answer, requiredFrequency);
            } else {
                answer = requiredFrequency;
                answerChanged = true;
            }
        }

        return answerChanged
                ? answer
                : 0;
    }
}
