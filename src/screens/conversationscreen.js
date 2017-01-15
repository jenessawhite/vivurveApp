import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ListView, TextInput, Dimensions } from 'react-native';
// import Button from '../components/button/button';
import { Actions } from 'react-native-router-flux';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { connect } from 'react-redux';
import moment from 'moment';
import { apiSendChat, newMesage } from '../actions/';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    main_text: {
        fontSize: 16,
        textAlign: "center",
        alignSelf: "center",
        color: "#42C0FB",
        marginLeft: 5
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#42C0FB",
        marginBottom: 10,
        padding:5
    },
    back_img: {
        marginTop: 8,
        marginLeft: 8,
        height: 20,
        width: 20
    },
    innerRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    back_btn: {},
    dp: {
        height: 35,
        width: 35,
        borderRadius: 17.5,
        marginLeft:5,
        marginRight:5
    },
    messageBlock: {
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#42C0FB",
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: "center",
        alignSelf: "flex-start",
        borderRadius: 6,
        marginBottom: 5
    },
    messageBlockRight: {
        flexDirection: "column",
        backgroundColor: "#fff",
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 6,
        marginBottom: 5
    },
    text: {
        color: "#5c5c5c",
        alignSelf: "flex-start"
    },
    time: {
        alignSelf: "flex-start",
        color: "#5c5c5c",
        marginTop:5
    },
    timeRight: {
        alignSelf: "flex-end",
        color: "#42C0FB",
        marginTop:5
    },
    textRight: {
        color: "#42C0FB",
        alignSelf: "flex-end",
        textAlign: "right"
    },
    input:{
        borderTopColor:"#e5e5e5",
        borderTopWidth:1,
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textInput:{
        height:30,
        width:(width * 0.85),
        color:"#e8e8e8",
    },
    msgAction:{
        height:29,
        width:29,
        marginTop:13
    }
});
const username = 'DUMMY_USER';

function mapStateToProps(state) {
    return {
        Chats: state.Chats,
        dispatch: state.dispatch
    }
}

class ConversationScreen extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            conversation: ds,
            text:"",
            username
        }
    }

    componentDidMount(){
        const {dispatch, Chats} = this.props;
        const chats = Chats;
        chats.sort((a,b)=>{
                return moment(a.sent_at).valueOf() - moment(b.sent_at).valueOf();
            });
            this.setState({
                conversation: this.state.conversation.cloneWithRows(chats)
            })
    }
    componentWillReceiveProps(nextProps) {
        const {dispatch, Chats} = this.props;
        const chats = Chats;
        chats.sort((a,b)=>{
                return moment(a.sent_at).valueOf() - moment(b.sent_at).valueOf();
            });
            this.setState({
                conversation: this.state.conversation.cloneWithRows(chats)
            })

    }

    renderSenderUserBlock(data){
        return (
            <View style={styles.messageBlockRight}>
                <Text style={styles.textRight}>
                    {data.message}
                </Text>
                <Text style={styles.timeRight}>{moment(data.time).calendar()}</Text>
            </View>
        )
    }
    renderReceiverUserBlock(data){
        return (
            <View style={styles.messageBlock}>
                <Text style={styles.text}>
                    {data.message}
                </Text>
                <Text style={styles.time}>{moment(data.time).calendar()}</Text>
            </View>
        )
    }
    renderRow = (rowData) => {
        return (
            <View>
                {rowData.sender == username ? this.renderSenderUserBlock(rowData) : this.renderReceiverUserBlock(rowData)}
            </View>
        )
    }

    sendMessage = () => {

        const message = this.state.text;
        const username =  this.state.username;

        const {dispatch, Chats} = this.props;
        dispatch(apiSendChat(username,message))

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Button
                        style={styles.back_btn}
                        onPress={() => Actions.pop()}>
                    </Button>
                    <View style={styles.innerRow}>
                        <Image source={{uri:"https://avatars3.githubusercontent.com/u/11190968?v=3&s=460"}} style={styles.dp}/>
                        <Text style={styles.main_text}>GROUP CHAT</Text>
                    </View>
                </View>

                <ListView
                    renderRow={this.renderRow}
                    dataSource={this.state.conversation}/>

                <View style={styles.input}>

                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({username:text})}
                        placeholder="Send has?"/>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({text:text})}
                        placeholder="Type a message"/>
                    <Button
                        onPress={this.sendMessage}>
                    </Button>
                </View>
                <KeyboardSpacer/>
            </View>
        )
    }
}

export default connect(mapStateToProps)(ConversationScreen)
