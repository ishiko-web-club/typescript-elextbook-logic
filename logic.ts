// Only for valuement entities
type value = number | string | false;
type CircuitType = 'series' | 'parallel';

// For the return or valueumnet entities
interface Ohm<T> {
    V: T;
    R: T;
    I: T;
}
interface NResistor<T> {
    [key: string]: T;
}

interface RLC<T> {
    R: T;
    L: T;
    C: T;
}
interface RL<T> {
    R: T;
    L: T;
}
interface RC<T> {
    R: T;
    C: T;
}

interface Calorie<T> extends Ohm<T> {
    H: T;
    P: T;
    QJ: T;
    t$s: T;
}


// True name: eMathformulaService
class Main { 
    constructor() { }
    private range(range: number): number[] {
        return new Array<number>(range).fill(0);
    }

    /**
     * @description オームの法則
     * @param V 電圧 V[V]
     * @param R 抵抗 R[Ω]
     * @param I 電流 I[A]
     */
    ohm(value: Ohm<value>): Ohm<number> { 
        // this.range(10);
        // 一括で定義（分割代入）
        let [v, r, i] = this.range(3);

        if (!value.V) {
            r = value.R as number;
            i = value.I as number;
            v = r * i;
        } else if (!value.R) {
            v = value.V as number;
            i = value.I as number;
            r = v / i;
        } else {
            // !value.I
            v = value.V as number;
            r = value.R as number;
            i = v / r;
        }
    
        return { V: v, R: r, I: i };
    }

    /** RLC で使用される値 */
    // 抵抗 R[Ω]
    resistor(value: {}) {
    }
    // インダクタンス L[H]
    inductance(value: {}) { 
    }
    // 静電容量 C[F]
    capacitance(value: {}) {
        
    }


    /** RLC系列の functions */
    /**
     * @description RLC回路
     * @param R 抵抗 R[Ω]
     * @param L リアクタンス L[Ω]
     * @param C コンデンサ C[Ω]
     */
    rlc(circuitType: CircuitType, value: RLC<value>): RLC<number> {
        let [r, l, c] = [0, 0, 0];

        if (circuitType === 'series') {
            // 直列の処理

        } else if (circuitType === 'parallel') {
            // 並列の処理

        }

        return { R: r, L: l, C: c };
    }

    /**
     * @description RLC回路
     * @param R 抵抗 R[Ω]
     * @param L リアクタンス L[Ω]
     */
    rl(circuitType: CircuitType, value: RL<value>): RL<number> {
        let [r, l] = [0, 0];

        if (circuitType === 'series') {
            // 直列の処理

        } else if (circuitType === 'parallel') {
            // 並列の処理

        }

        return { R: r, L: l };
    }

    /**
     * @description RLC回路
     * @param R 抵抗 R[Ω]
     * @param C コンデンサ C[Ω]
     */
    rc(circuitType: CircuitType, value: RC<value>): RC<number> {
        let [r, c] = [0, 0];

        if (circuitType === 'series') {
            // 直列の処理

        } else if (circuitType === 'parallel') {
            // 並列の処理

        }

        return { R: r, C: c };
    }


    /**
     * @description ジュール
     * @br
     * @param H 熱量 H[J] ※Hはヒート(heat)の略
     * @param Qj 発生熱
     * @param P 電力 P[W]
     * @param t$s 時間 time/sの略 [s] 
     * @br
     * @param V 電流 V[v] 
     * @param R 抵抗 R[Ω]
     * @param I 電流 I[A]
     */
    calorie(value: Calorie<value>): Calorie<number> {
        let [h, p, qj, t$s, v, r, i] = [0, 0, 0, 0, 0, 0, 0];



        return { H: h, P: p, QJ: qj, t$s, V: v, R: r, I: i};
    }


    //共進周波数
    resonanceFrequency(value: { L: value, C: value }) {
        
    }

    /** 電力(P)についての functions  */
    // 電力[W]
    electricity() { }
    // 電力量[Wh]
    electricEnergy(value: { P: value, T: value, V: value, I: value, R:value}) {
    }
    // 有効電力[W]
    activePower(value: { V: value, I: value, phi: value }) {
        
    }
    // 無効電力[Var]
    reactivePower(value: { V: value, I: value, phi: value }) {
        
    }
    // 皮相電力[V.A]
    apparentPower(value: { V: value, I: value}) {
        
    }
    // 力率
    powerFactor(value: { P: value, Ps: value }) {
    }
}

export const main = new Main();

