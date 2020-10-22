import md5 from 'crypto-js/md5'

export class Day4 {
    static input = "yzbqklnj"


    private static findSolution(pattern: string) {
        let i = 0;
        let s = "";
        for (; !s.startsWith(pattern); i++) {
            s = md5(this.input + i).toString()
        }
        return --i;
    }

    static solve1() {
        let i = this.findSolution("00000");
        console.log(i)
    }

    static solve2() {
        let i = this.findSolution("000000")
        console.log(i)
    }
}