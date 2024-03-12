// MAIN FUNCTION

var array = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']
// invoke function
console.log(findAnagrams(array))

// ===================================================================

function findAnagrams(a) {
    let savedWords = [];
    
    for (let i = 0; i < a.length; i++) {
        let currentWord = a[i];
        let found = false;

        // Check if the current word is an anagram of any saved word group
        for (let group of savedWords) {
            if (areAnagrams(group[0], currentWord)) {
                group.push(currentWord);
                found = true;
                break;
            }
        }

        // If not found, create a new group for the current word
        if (!found) {
            savedWords.push([currentWord]);
        }
    }

    return savedWords;
}


// helper
function areAnagrams(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const charCount = {};

    // Count string inside first word
    for (let char of word1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract character counts in second word
    for (let char of word2) {
        if (!charCount[char]) {
            return false; // Character not present in the first word
        }
        charCount[char]--;
    }

    return true;
}