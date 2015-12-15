import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';
import HorizontalForm from 'routes/forms/horizontalform';

class Body extends React.Component {
  onChange() {
    console.log('onChange');
  }
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={6} collapseRight>
              <PanelContainer noOverflow controlStyles='bg-green fg-white'>
                <Panel>
                  <PanelHeader className='bg-green fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Default form</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Form>
                            <FormGroup>
                              <Label htmlFor='emailaddress'>Email address</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-mail' />
                                </InputGroupAddon>
                                <Input autoFocus type='email' id='emailaddress' placeholder='Email address' />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='password'>Password</Label>
                              <InputGroup>
                                <Input type='password' id='password' placeholder='Password' />
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-key' />
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
                            <FormGroup feedback>
                              <Label htmlFor='withicon' control>With icon</Label>
                              <Input type='text' id='withicon' placeholder='Search' />
                              <Icon bundle='fontello' glyph='search' feedback/>
                            </FormGroup>
                            <FormGroup feedback>
                              <Label htmlFor='inputwithicon' control>Input with icon</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-alert' />
                                </InputGroupAddon>
                                <Input type='text' id='inputwithicon' placeholder='Search' />
                                <Icon bundle='fontello' glyph='search' feedback/>
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='disabled'>Disabled</Label>
                              <Input disabled type='text' id='disabled' placeholder='Disabled' />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='readonly'>Read only</Label>
                              <Input readOnly type='text' id='readonly' placeholder='Read only' />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='dropdownselect'>Dropdown Select</Label>
                              <Select id='dropdownselect' defaultValue='1'>
                                <option value='1'>Option 1</option>
                                <option value='2'>Option 2</option>
                                <option value='3'>Option 3</option>
                                <option value='4'>Option 4</option>
                                <option value='5'>Option 5</option>
                              </Select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='multiselect'>Multiple Select</Label>
                              <Select id='multiselect' multiple>
                                <option value='1'>Option 1</option>
                                <option value='2'>Option 2</option>
                                <option value='3'>Option 3</option>
                                <option value='4'>Option 4</option>
                                <option value='5'>Option 5</option>
                              </Select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='textarea'>Textarea</Label>
                              <Textarea id='textarea' rows='3' placeholder='Some text here...' />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='fileinput'>File input</Label>
                              <Input id='fileinput' type='file' />
                              <HelpBlock>some help text here.</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                              <Label>Checkboxes</Label>
                              <Checkbox value='option1' name='checkbox-options'>
                                Option one is great
                              </Checkbox>
                              <Checkbox value='option2' defaultChecked name='checkbox-options'>
                                Option two is checked
                              </Checkbox>
                              <Checkbox value='option3' disabled name='checkbox-options'>
                                Option three is disabled
                              </Checkbox>
                              <hr/>
                            </FormGroup>
                            <FormGroup>
                              <Label>Inline checkboxes</Label>
                              <div>
                                <Checkbox inline value='option1' name='inline-checkbox-options' onChange={this.onChange}>
                                  Option one
                                </Checkbox>
                                <Checkbox inline value='option2' defaultChecked name='inline-checkbox-options'>
                                  Option two
                                </Checkbox>
                                <Checkbox inline value='option3' disabled name='inline-checkbox-options'>
                                  Option disabled
                                </Checkbox>
                              </div>
                              <hr/>
                            </FormGroup>
                            <FormGroup>
                              <Label>Radios</Label>
                              <Radio value='option1' defaultChecked name='radio-options'>
                                Option 1
                              </Radio>
                              <Radio value='option2' name='radio-options'>
                                Option 2
                              </Radio>
                              <Radio value='option3' disabled name='radio-options'>
                                Option disabled
                              </Radio>
                              <hr/>
                            </FormGroup>
                            <FormGroup>
                              <Label>Inline radios</Label>
                              <div>
                                <Radio inline value='option1' name='inline-radio-options'>
                                  Option one
                                </Radio>
                                <Radio inline value='option2' defaultChecked name='inline-radio-options'>
                                  Option two
                                </Radio>
                                <Radio inline value='option3' disabled name='inline-radio-options'>
                                  Option disabled
                                </Radio>
                              </div>
                            </FormGroup>
                          </Form>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-darkgreen45 text-right'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <br/>
                          <div>
                            <Button outlined bsStyle='lightgreen'>cancel</Button>{' '}
                            <Button outlined bsStyle='lightgreen'>submit</Button>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-red fg-white'>
                <Panel>
                  <PanelHeader className='bg-red fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Input groups</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Form>
                            <FormGroup>
                              <Label>Checkbox addons</Label>
                              <Grid>
                                <Row>
                                  <Col xs={6} collapseLeft collapseRight>
                                    <InputGroup>
                                      <InputGroupAddon><Checkbox native/></InputGroupAddon>
                                      <Input type='text' placeholder='Username'/>
                                    </InputGroup>
                                  </Col>
                                  <Col xs={6} collapseRight>
                                    <InputGroup>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupAddon><Checkbox native/></InputGroupAddon>
                                    </InputGroup>
                                  </Col>
                                </Row>
                              </Grid>
                            </FormGroup>
                            <FormGroup>
                              <Label>Radio addons</Label>
                              <Grid>
                                <Row>
                                  <Col xs={6} collapseLeft collapseRight>
                                    <InputGroup>
                                      <InputGroupAddon><Radio name='radioaddon' native/></InputGroupAddon>
                                      <Input type='text' placeholder='Username'/>
                                    </InputGroup>
                                  </Col>
                                  <Col xs={6} collapseRight>
                                    <InputGroup>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupAddon><Radio name='radioaddon' native/></InputGroupAddon>
                                    </InputGroup>
                                  </Col>
                                </Row>
                              </Grid>
                            </FormGroup>
                            <FormGroup>
                              <Label>Button addons</Label>
                              <Grid>
                                <Row>
                                  <Col xs={6} collapseLeft collapseRight>
                                    <InputGroup>
                                      <InputGroupButton><Button bsStyle='red'>Go!</Button></InputGroupButton>
                                      <Input type='text' placeholder='Username'/>
                                    </InputGroup>
                                  </Col>
                                  <Col xs={6} collapseRight>
                                    <InputGroup>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupButton><Button bsStyle='green'>Go!</Button></InputGroupButton>
                                    </InputGroup>
                                  </Col>
                                </Row>
                              </Grid>
                            </FormGroup>
                            <FormGroup>
                              <Label>Button addons: Dual</Label>
                              <Grid>
                                <Row>
                                  <Col xs={12} collapseLeft collapseRight>
                                    <InputGroup>
                                      <InputGroupButton><Button bsStyle='red'>Go!</Button></InputGroupButton>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupButton><Button bsStyle='green'>Go!</Button></InputGroupButton>
                                    </InputGroup>
                                  </Col>
                                </Row>
                              </Grid>
                            </FormGroup>
                            <FormGroup>
                              <Label>Button with dropdowns</Label>
                              <Grid>
                                <Row>
                                  <Col xs={6} collapseRight collapseLeft>
                                    <InputGroup>
                                      <InputGroupButton>
                                        <DropdownButton container={this} menu='btnwithdropdown1'>
                                          <span>Action </span><Caret/>
                                        </DropdownButton>
                                        <Menu ref='btnwithdropdown1'>
                                          <MenuItem href='#'>Action</MenuItem>
                                          <MenuItem href='#'>Another Action</MenuItem>
                                          <MenuItem href='#'>Something else here</MenuItem>
                                          <MenuItem divider></MenuItem>
                                          <MenuItem href='#'>Separated link</MenuItem>
                                        </Menu>
                                      </InputGroupButton>
                                      <Input type='text' placeholder='Username'/>
                                    </InputGroup>
                                  </Col>
                                  <Col xs={6} collapseRight>
                                    <InputGroup>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupButton>
                                        <DropdownButton container={this} menu='btnwithdropdown2'>
                                          <span>Action </span><Caret/>
                                        </DropdownButton>
                                        <Menu ref='btnwithdropdown2' alignRight>
                                          <MenuItem href='#'>Action</MenuItem>
                                          <MenuItem href='#'>Another Action</MenuItem>
                                          <MenuItem href='#'>Something else here</MenuItem>
                                          <MenuItem divider></MenuItem>
                                          <MenuItem href='#'>Separated link</MenuItem>
                                        </Menu>
                                      </InputGroupButton>
                                    </InputGroup>
                                  </Col>
                                </Row>
                              </Grid>
                            </FormGroup>
                            <FormGroup>
                              <Label>Button with dropdowns: Dual</Label>
                              <Grid>
                                <Row>
                                  <Col xs={12} collapseLeft collapseRight>
                                    <InputGroup>
                                      <InputGroupButton>
                                        <DropdownButton bsStyle='green' container={this} menu='btnwithdropdown3'>
                                          <span>Action </span><Caret/>
                                        </DropdownButton>
                                        <Menu ref='btnwithdropdown3' bsStyle='green'>
                                          <MenuItem href='#'>Action</MenuItem>
                                          <MenuItem href='#'>Another Action</MenuItem>
                                          <MenuItem href='#'>Something else here</MenuItem>
                                          <MenuItem divider></MenuItem>
                                          <MenuItem href='#'>Separated link</MenuItem>
                                        </Menu>
                                      </InputGroupButton>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupButton>
                                        <DropdownButton bsStyle='orange' container={this} menu='btnwithdropdown4'>
                                          <span>Action </span><Caret/>
                                        </DropdownButton>
                                        <Menu ref='btnwithdropdown4' bsStyle='orange' alignRight>
                                          <MenuItem href='#'>Action</MenuItem>
                                          <MenuItem href='#'>Another Action</MenuItem>
                                          <MenuItem href='#'>Something else here</MenuItem>
                                          <MenuItem divider></MenuItem>
                                          <MenuItem href='#'>Separated link</MenuItem>
                                        </Menu>
                                      </InputGroupButton>
                                    </InputGroup>
                                  </Col>
                                </Row>
                              </Grid>
                            </FormGroup>
                            <FormGroup>
                              <Label>Segmented dropdowns: Dual</Label>
                              <Grid>
                                <Row>
                                  <Col xs={12} collapseLeft collapseRight>
                                    <InputGroup>
                                      <InputGroupButton>
                                        <Button bsStyle='green'>Action</Button>
                                        <DropdownButton bsStyle='green' container={this} menu='btnwithdropdown5'>
                                          <Caret/>
                                        </DropdownButton>
                                        <Menu ref='btnwithdropdown5' bsStyle='green'>
                                          <MenuItem href='#'>Action</MenuItem>
                                          <MenuItem href='#'>Another Action</MenuItem>
                                          <MenuItem href='#'>Something else here</MenuItem>
                                          <MenuItem divider></MenuItem>
                                          <MenuItem href='#'>Separated link</MenuItem>
                                        </Menu>
                                      </InputGroupButton>
                                      <Input type='text' placeholder='Username'/>
                                      <InputGroupButton>
                                        <Button bsStyle='orange'>Action</Button>
                                        <DropdownButton bsStyle='orange' container={this} menu='btnwithdropdown6'>
                                          <Caret/>
                                        </DropdownButton>
                                        <Menu ref='btnwithdropdown6' bsStyle='orange' alignRight>
                                          <MenuItem href='#'>Action</MenuItem>
                                          <MenuItem href='#'>Another Action</MenuItem>
                                          <MenuItem href='#'>Something else here</MenuItem>
                                          <MenuItem divider></MenuItem>
                                          <MenuItem href='#'>Separated link</MenuItem>
                                        </Menu>
                                      </InputGroupButton>
                                    </InputGroup>
                                  </Col>
                                </Row>
                              </Grid>
                            </FormGroup>
                          </Form>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-red text-right'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <br/>
                          <div>
                            <Button outlined bsStyle='lightred'>cancel</Button>{' '}
                            <Button outlined bsStyle='lightred'>submit</Button>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer noOverflow controlStyles='bg-darkblue fg-white'>
                <HorizontalForm />
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-purple fg-white'>
                <PanelHeader className='bg-purple fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Horizontal form: Sizing</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <Form horizontal>
                          <FormGroup>
                            <Label htmlFor='largeinput' sm={3} control>Large input</Label>
                            <Col sm={9}>
                              <Input id='largeinput' placeholder='Large input' lg />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='defaultinput' sm={3} control>Default input</Label>
                            <Col sm={9}>
                              <Input id='defaultinput' placeholder='Default input' />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='smallinput' sm={3} control>Small input</Label>
                            <Col sm={9}>
                              <Input id='smallinput' placeholder='Small input' sm />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='largeselect' sm={3} control>Large select</Label>
                            <Col sm={9}>
                              <Select id='largeselect' lg>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Select>
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='defaultselect' sm={3} control>Default select</Label>
                            <Col sm={9}>
                              <Select id='defaultselect'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Select>
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor='smallselect' sm={3} control>Small input</Label>
                            <Col sm={9}>
                              <Select id='smallselect' sm>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Select>
                            </Col>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
                <PanelFooter className='bg-purple text-right'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <br/>
                        <div>
                          <Button outlined bsStyle='lightpurple'>cancel</Button>{' '}
                          <Button outlined bsStyle='lightpurple'>submit</Button>
                        </div>
                        <br/>
                      </Col>
                    </Row>
                  </Grid>
                </PanelFooter>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}
