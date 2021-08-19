import { Light, LightOnCommand, LightOffCommand, RedLightOnCommand, RedLightDecreaseCommand, RedLightIncreaseCommand } from "../patterns/command/command-remote";

describe('Command Pattern Test', () => {
    test('Light turned on', () => {
        let expected = new Light();
        expected.isLightOn = true;
        let reality = new LightOnCommand(expected);
        expect(expected.on()).toEqual(reality.execute());
    })
    test('light turned off', () => {
        let expected = new Light();
        let reality = new LightOffCommand(expected);
        expect(expected.off()).toEqual(reality.execute());
    })
    test('luminosity increasing', () => {
        let expected = new Light();
        expected.isLightOn = true;
        expected.isRedLightOn=true;
        expected.luminosity=1;
        let reality = new RedLightIncreaseCommand(expected);
        expect(expected.redTwo()).toEqual(reality.execute());
    })
    test('Luminosity decreasing', () => {
        let expected = new Light();
        expected.isLightOn = true;
        expected.isRedLightOn=true;
        expected.luminosity=1;
        let reality = new RedLightDecreaseCommand (expected);
        expect(expected.redZero()).toEqual(reality.execute());
    })  
})