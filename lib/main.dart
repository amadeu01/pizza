import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
        colorScheme: ColorScheme.dark(),
        textTheme: GoogleFonts.arvoTextTheme(ThemeData.dark().textTheme),
      ),
      home: Scaffold(
        backgroundColor: Color(0xFF181D2B),
        body: MainStack(),
      ),
    );
  }
}

class MainStack extends StatelessWidget {
  const MainStack({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Stack(children: [
      Positioned(
        top: size.height * 0.8,
        left: size.width * 0.20,
        child: SizedBox(
          height: 50,
          child: Image(
            image: AssetImage('images/manjericao1.png'),
          ),
        ),
      ),
      Positioned(
        top: -(size.height * 0.05),
        left: size.width * 0.55,
        child: SizedBox(
          height: 80,
          child: Image(
            image: AssetImage('images/manjericao3.png'),
          ),
        ),
      ),
      MainPage(),
    ]);
  }
}

class MainPage extends StatelessWidget {
  const MainPage({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SizedBox(
          height: 80,
        ),
        Row(
          children: [
            Expanded(flex: 1, child: Center(child: _buildFlavor(context))),
            Expanded(flex: 1, child: _buildSize(context)),
            Expanded(flex: 1, child: _buildPrice(context)),
          ],
        ),
        Spacer(),
        SizedBox(
          height: size.height * 0.5,
          child: Center(
            child: new AspectRatio(
              aspectRatio: 3 / 2,
              child: new Container(
                decoration: new BoxDecoration(
                    image: new DecorationImage(
                  fit: BoxFit.fitWidth,
                  alignment: FractionalOffset.topCenter,
                  image: AssetImage('images/pizza.png'),
                )),
              ),
            ),
          ),
        )
      ],
    );
  }

  Column _buildPrice(BuildContext context) {
    return Column(
      children: [
        Text(
          "R\$ 50,00",
          style: Theme.of(context)
              .textTheme
              .headline5
              ?.copyWith(color: Colors.white),
        ),
      ],
    );
  }

  Column _buildSize(BuildContext context) {
    return Column(
      children: [
        Text(
          "Tamanho",
          style: Theme.of(context).textTheme.headline3,
        ),
        SizedBox(height: 40),
        Text(
          "Médio",
          style: Theme.of(context).textTheme.headline5,
        ),
      ],
    );
  }

  Column _buildFlavor(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SizedBox(height: 80),
        Text(
          "Pizza napolitana",
          style: Theme.of(context)
              .textTheme
              .headline4
              ?.copyWith(color: Colors.white),
        ),
        SizedBox(height: 4),
        Text(
          "com tomate, manjericão",
          style: Theme.of(context)
              .textTheme
              .bodyText1
              ?.copyWith(color: Colors.white),
        ),
        Text(
          "e muzzarela de bufula",
          style: Theme.of(context)
              .textTheme
              .bodyText1
              ?.copyWith(color: Colors.white),
        ),
      ],
    );
  }
}
