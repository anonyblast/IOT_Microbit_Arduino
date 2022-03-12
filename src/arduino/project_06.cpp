// C++ code
/*
  This program blinks pin 13 of the Arduino (the
  built-in LED)
*/

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  // turn the LED on (HIGH is the voltage level)
  digitalWrite(LED_BUILTIN, HIGH);
  delay(250); // Wait for 250 millisecond(s)
  digitalWrite(LED_BUILTIN, LOW);
  delay(250); // Wait for 250 millisecond(s)
}

// C++ code
//
// void setup()
// {
//   pinMode(2, OUTPUT);
//   pinMode(8, OUTPUT);
// }

// void loop()
// {
//   digitalWrite(2, HIGH);
//   delay(1000); // Wait for 1000 millisecond(s)
//   digitalWrite(2, LOW);
//   delay(1000); // Wait for 1000 millisecond(s)
//   digitalWrite(8, HIGH);
//   delay(1000); // Wait for 1000 millisecond(s)
//   digitalWrite(8, LOW);
//   delay(1000); // Wait for 1000 millisecond(s)
// }