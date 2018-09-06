
function animate(typewriter) {
    sequence = [
        {
            text: ":~ $ ",
            instant: true,
            delayAfter: 500
        },
        {
            text: "poco init my-project\n",
            delayAfter: 500
        },
        {
            text: "poco.yaml created\ndocker-compose.yaml created\nProject init completed!\n",
            instant: true,
            delayAfter: 500
        },
        {
            text: ":~ $ ",
            instant: true,
            delayAfter: 500
        },
        {
            text: "poco up\n",
            delayAfter: 1000
        },
        {
            text: "Pulling helloworld (ubuntu:14.04)...\n",
            instant: true,
            delayAfter: 500
        },
        {
            text: "14.04: Pulling from library/ubuntu\n",
            instant: true,
            delayAfter: 500
        },
        {
            text: "Digest: sha256:ed4903ds63459d6e5ed6c0f23d45e94c3a0t50d24727c7c5c48fded60f70aa96\n",
            instant: true,
            delayAfter: 500
        },
        {
            text: "Status: Image is up to date for ubuntu:14.04\n",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "services:\n  helloworld:\n    command: /bin/echo 'Hello world'\n    image: ubuntu:14.04\nversion: '2.0'\n",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "Creating network \"ttt_default\" with the default driver\n",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "Creating my-project_helloworld_1 ... done\n",
            instant: true,
            delayAfter: 500
        },
        {
            text: "      Name                Command          State    Ports\n"
            + "---------------------------------------------------------\n"
            +"ttt_helloworld_1   /bin/echo Hello world   Exit 0",
            instant: true,
            delayAfter: 500
        },
        {
            text: "\n",
            instant: true,
            delayAfter: 2000
        }
    ];

    typewriter.playSequence(sequence);
}
